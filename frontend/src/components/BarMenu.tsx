import { useContext } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { AuthContext } from "../context/auth";

export const BarMenu = () => {
  const { isUserAuthenticated } = useContext(AuthContext);

  return (
    <>
      <WbSunnyIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}>
        CHALLENGE/2023
      </Typography>
      {isUserAuthenticated && (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>          
          <Button href="/cats" sx={{ my: 2, mx: 1, color: "white", display: "block" }}>
            Cat Codes
          </Button>
          <Button href="/dogs" sx={{ my: 2, mx: 1, color: "white", display: "block" }}>
            Dog Button
          </Button>
          <Button href="/clients" sx={{ my: 2, mx: 1, color: "white", display: "block" }}>
            Lista de Clientes
          </Button>
        </Box>
      )}
    </>
  );
};
