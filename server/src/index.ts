import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen({ port: 8080, host: "0.0.0.0" }, () => console.log("Server is running smoothly!"));
