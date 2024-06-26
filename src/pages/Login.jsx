/**
 * Login component responsible for handling user login.
 * @version 1.0
 * @author Simon Shamoon 100%
 * 2024 March 21st
 */
import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setIsLoggedIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const response = await axios.post(
      "http://34.204.247.99/login.php",
      {
        username: username,
        password: password,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token); // Save the token in localStorage
      alert("Login successful.");
      setIsLoggedIn(true); // Update the login status
      navigate("/"); // Step 3: Navigate to /Home
    } else {
      console.log(response);
      alert("Login failed.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Login to Student Management Service
      </Typography>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
        }}
      >
        <TextField
          type="Username"
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button type="submit" variant="contained">
          "Login"
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
