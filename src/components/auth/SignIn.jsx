import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setError("Извините, не можем найти ваш аккаунт");
      });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <form onSubmit={LogIn}>
        <Typography variant="h4" gutterBottom>
          Авторизоваться
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
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Авторизоваться
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

export default SignIn;
