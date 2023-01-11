import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BarMenu } from "./BarMenu";
import { SmallBarMenu } from "./SmallBarMenu";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import { AuthContext } from "../context/auth";

export const NavBar = () => {
  const { isUserAuthenticated, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#19857b",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmallBarMenu />

          <BarMenu />
          {isUserAuthenticated && (
            <Button onClick={handleLogout} sx={{ my: 2, mx: 1, color: "white", display: "block" }}>
              Logout
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
