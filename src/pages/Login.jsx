import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
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
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
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
