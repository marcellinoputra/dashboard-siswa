import React, { useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import { Button, Box, TextField, Container, Typography } from "@mui/material";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmail() {}
  function handlePassword() {}

  function onGo() {
    console.log(email);
    console.log(password);

    if (email == "admin@admin.com" || password == "admin") {
      localStorage.setItem("token", "initoken");
      navigate("/home");
    } else {
      alert("Salah Email atau password");
    }
  }

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "70px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ marginBottom: "30px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          style={{ marginBottom: "30px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => onGo()} variant="contained">
          Login
        </Button>
      </Container>
    </>
  );
}
