import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Пароли не совпадают");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <form onSubmit={register}>
        <Typography variant="h4" gutterBottom>
          Создать аккаунт
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Подтвердите пароль"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password"
          fullWidth
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Создать аккаунт
        </Button>
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default SignUp;
