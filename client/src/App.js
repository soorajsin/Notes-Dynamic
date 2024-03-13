import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
