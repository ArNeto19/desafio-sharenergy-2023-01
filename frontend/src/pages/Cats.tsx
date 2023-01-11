import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getCat, ICatPhoto, httpResponses } from "../services/httpCat";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Cats = () => {
  const [catPhoto, setCatPhoto] = useState<ICatPhoto>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      if (searchParams === undefined || searchParams.toString() === "") {
        setCatPhoto(undefined);
        return;
      }
      if (searchParams.toString().length > 0) {
        getCat(searchParams.get("code")).then((res) => {
          setCatPhoto(res?.data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          mt: "3rem",
          textAlign: "center",
        }}>
        Click on a number to see a 🐱
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "25px" }}>
        {httpResponses.map((e, index) => {
          return (
            <Button
              key={index}
              size="large"
              sx={{ color: "#19857b" }}
              value={e.status}
              onClick={() => {
                setSearchParams({ code: `${e.status}` });
                handleOpen();
              }}>
              {e.status}
            </Button>
          );
        })}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              bgcolor: `${catPhoto ? "#000" : "transparent"}`,
              border: `${catPhoto ? "2px solid #000" : "nones"}`,
              boxShadow: `${catPhoto ? 24 : "nones"}`,
            }}>
            {catPhoto ? (
              <img src={catPhoto.cat} alt="cat" width={600} />
            ) : (
              <CircularProgress size={60} sx={{ color: "#fcb950" }} />
            )}
          </Box>
        </Modal>
      </Grid>
    </>
  );
};
