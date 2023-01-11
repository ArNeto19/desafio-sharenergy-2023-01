import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { Users } from "./Users";

export const Home = () => {
  const { authenticate, isUserAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authenticate()
      .then((authenticated) => {
        if (!authenticated) {
          navigate("/login");

          return;
        }
      })
      .catch((error) => {
        console.log(error);
        // navigate("/login");

        return;
      });
  }, [authenticate, navigate]);

  return (
    <>
      {!isUserAuthenticated ? (
        <Stack alignItems="center" m="10rem">
          <CircularProgress size={60} sx={{ color: "#fcb950" }} />
        </Stack>
      ) : (
        <Users />
      )}
    </>
  );
};
