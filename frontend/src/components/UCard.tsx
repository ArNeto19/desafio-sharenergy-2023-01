import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const UCard = (props: any) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "grey.100",
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
        maxWidth: "16rem",
        textAlign: "center",
        borderRadius: "20px",
        padding: "30px",
        margin: "5px",
      }}>
      <CardContent>
        <Avatar src={props.avatar} sx={{ width: 70, height: 70, margin: "auto" }} />
        <Typography sx={{ fontSize: 16, fontWeight: "400" }} color="text.secondary" gutterBottom>
        {props.username}
        </Typography>
        <Typography variant="h6" component="div">
          {`${props.fName} ${props.lName}`}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {props.email}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {`${props.age} y. o.`}
        </Typography>
      </CardContent>
    </Card>
  );
};
