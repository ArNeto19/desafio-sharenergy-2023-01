import Typography from "@mui/material/Typography";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props: any) => {
  return (
    <Typography
      component={"div"}
      minHeight="100vh"
      bgcolor="grey.100"
      variant="body1"
      color="text.secondary"
      p="5px">
      <Header />
      {props.children}
      <Footer />
    </Typography>
  );
};
