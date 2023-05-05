import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import PermanentDrawerLeft from "./components/Dashboard";
export function App() {
  const navigate = useNavigate();
  function clickMe() {
    localStorage.removeItem("token");
    navigate("/admin/sign-in");
  }
  return (
    <div className="App">
      <PermanentDrawerLeft />;
    </div>
  );
}

export function About() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Button variant="contained">About</Button>
    </div>
  );
}
