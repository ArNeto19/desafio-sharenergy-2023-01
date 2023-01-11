import Box from "@mui/material/Box";

export const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <Box component={"div"} textAlign="center" color="text.secondary" mt={"5rem"}>
      Copyright by{" "}
      <a href="https://github.com/ArNeto19" style={{ textDecoration: "none", color: "inherit" }}>
        @ArNeto19
      </a>{" "}
      ⓒ {thisYear}{" "}
    </Box>
  );
};
