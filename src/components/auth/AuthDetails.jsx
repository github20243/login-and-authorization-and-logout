import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Button, Typography, Box } from "@mui/material";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log("error"));
  };

  return (
    <Box sx={{ mt: 3 }}>
      {authUser ? (
        <Box>
          <Typography variant="h6">{`Signed in as ${authUser.email}`}</Typography>
          <Button variant="contained" color="error" onClick={userSignOut}>
            Выйти
          </Button>
        </Box>
      ) : (
        <Typography variant="body1">Успешный выход из аккаунта</Typography>
      )}
    </Box>
  );
};

export default AuthDetails;
