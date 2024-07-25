import Home from "./Components/Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Player from "./Components/Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged In");
        navigate("/");
      } else {
        console.log("logged out");
        navigate("/Login");
      }
    });
  }, []);
  return (
    <div className="app">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PLayer/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
