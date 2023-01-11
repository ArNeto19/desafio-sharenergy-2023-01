import { useState, useContext } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { AuthContext } from "../context/auth";

export const SmallBarMenu = () => {
  const { isUserAuthenticated } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <WbSunnyIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 3,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}>
        CHALLENGE/2023
      </Typography>
      {isUserAuthenticated && (
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}>
            <MenuItem component="a" href="/" onClick={handleCloseNavMenu}>
              <Typography textAlign="left">Home</Typography>
            </MenuItem>
            <MenuItem component="a" href="/cats" onClick={handleCloseNavMenu}>
              <Typography textAlign="left">Cat Codes</Typography>
            </MenuItem>
            <MenuItem component="a" href="/dogs" onClick={handleCloseNavMenu}>
              <Typography textAlign="left">Dog Button</Typography>
            </MenuItem>
            <MenuItem component="a" href="/clients" onClick={handleCloseNavMenu}>
              <Typography textAlign="left">Client List</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};
