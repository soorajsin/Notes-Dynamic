import React, { useCallback, useEffect, useState } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import apiURL from "../config";

const HomePage = () => {
  const api = apiURL.url;
  const pageNavigate = useNavigate();
  const addNotes = () => {
    pageNavigate("/add");
  };

  const [userData, setUserData] = useState();
  // console.log(userData);
  const homeAuth = useCallback(async () => {
    const token = await localStorage.getItem("token");
    const data = await fetch(`${api}/validator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    const res = await data.json();
    // console.log(res);
    if (res.status === 205) {
      // console.log(res);
      setUserData(res);
    } else {
      console.log("user not found");
    }
  }, [api]);

  useEffect(() => {
    homeAuth();
  }, [homeAuth]);

  const deleteNotes = async (addNoteId, index) => {
    const token = await localStorage.getItem("token");
    const data = await fetch(`${api}/deleteNotes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ addNoteId })
    });
    const res = await data.json();
    // console.log(res);
    if (res.status === 209) {
      console.log(res);
      setUserData(res);
    } else {
      alert("Notes not delete");
    }
  };

  const updateNotes = (addNoteId, index) => {
    pageNavigate(`/update/${addNoteId}`);
  };

  return (
    <>
      <div className="home">
        <div className="homeCon">
          <div className="add">
            <div className="addCon">
              <>
                <button onClick={addNotes}>ADD</button>
                <input type="title" placeholder="Search title here ..." />
              </>
            </div>
          </div>
          <div className="show">
            {userData
              ? userData.data.addNotes.map((addNote, index) => (
                  <div key={index} className="show-data">
                    <h3>{addNote.title}</h3>
                    <p>{addNote.description}</p>
                    <div className="action">
                      <>
                        <i
                          onClick={() => deleteNotes(addNote._id, index)}
                          className="fa-solid fa-trash"
                        ></i>
                        <i
                          onClick={() => updateNotes(addNote._id, index)}
                          className="fa-solid fa-pen-to-square"
                        ></i>
                      </>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
