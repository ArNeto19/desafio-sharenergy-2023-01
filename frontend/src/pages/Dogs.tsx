import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";

import { getDog, IDogResponse } from "../services/dogApi";

export const Dogs = () => {
  const [dogData, setDogData] = useState<IDogResponse>();

  const handleClick = () => {
    try {
      getDog().then(async (res) => {
        if (res) {
          setDogData(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box component="main" maxWidth="xs" textAlign="center" p={2}>
      <Card>
        <Fab
          variant="circular"
          sx={{ width: '4rem', height: '4rem', my: 2, bgcolor: "#19857b", ":hover": { backgroundColor: "#fcb950" } }}
          onClick={() => handleClick()}>
          🐶
        </Fab>
        {(dogData?.url.includes("jpg") || dogData?.url.includes("JPG"))  && (
          <CardMedia
            component="img"
            src={dogData?.url}
            alt="#"
            sx={{
              maxHeight: "80vh",
              maxWidth: "50%",
              mx: "auto",
              mb: "15px",
              boxShadow: "1px 1px 0 0 #ffffff inset, 0 2px 3px 0 #b3b3b3",
            }}
          />
        )}
        {(dogData?.url.includes("png") || dogData?.url.includes("jpeg")) && (
          <CardMedia
            component="img"
            src={dogData?.url}
            alt="#"
            sx={{
              maxHeight: "80vh",
              maxWidth: "50%",
              mx: "auto",
              mb: "15px",
              boxShadow: "1px 1px 0 0 #ffffff inset, 0 2px 3px 0 #b3b3b3",
            }}
          />
        )}
        {dogData?.url.includes("gif") && (
          <CardMedia
            component="img"
            src={dogData?.url}
            alt="#"
            sx={{
              maxHeight: "70vh",
              maxWidth: "50%",
              mx: "auto",
              mb: "15px",
              boxShadow: "1px 1px 0 0 #ffffff inset, 0 2px 3px 0 #b3b3b3",
            }}
          />
        )}
        {(dogData?.url.includes("mp4") || dogData?.url.includes("webm")) && (
          <CardMedia
            component="video"
            src={dogData?.url}
            controls
            autoPlay
            sx={{
              width: "500px",
              mx: "auto",
              mb: "15px",
              boxShadow: "1px 1px 0 0 #ffffff inset, 0 2px 3px 0 #b3b3b3",
            }}
          />
        )}
      </Card>
    </Box>
  );
};
