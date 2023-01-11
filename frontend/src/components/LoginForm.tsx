import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

import { login } from "../services/login";

export const LoginForm = () => {
  const [username, setUsername] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const navigate = useNavigate();
  const theme = createTheme();

  const handleCheck = (e: any) => {
    const { value } = e.target;

    setRememberMe(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(username, password, rememberMe)
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "grey.200",
            borderRadius: "5px",
            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
            width: "100%",
            padding: "2rem",
            marginTop: 10,
          }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              helperText="Correct: desafiosharenergy"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              helperText="Correct: sh@r3n3rgy"
            />
            <Box textAlign="left">
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    value={rememberMe}
                    onChange={handleCheck}
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                ":hover": { backgroundColor: "#fcb950", color: "black" },
                mt: 2,
                mb: 2,
                backgroundColor: "#19857b",
              }}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
