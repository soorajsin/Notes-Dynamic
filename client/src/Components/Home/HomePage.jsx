import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const pageNavigate = useNavigate();
  const addNotes = () => {
    pageNavigate("/add");
  };

  return (
    <>
      <div className="home">
        <div className="homeCon">
          <div className="add">
            <button onClick={addNotes}>ADD</button>
          </div>
          <div className="show">kjsd</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
