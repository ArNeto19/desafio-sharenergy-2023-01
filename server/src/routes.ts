import { Router } from "express";

import { authMiddleware } from "./middleware/authMiddleware";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { RandomUserController } from "./controllers/RandomUserController";
import { ClientController } from "./controllers/ClientController";
import { CatController } from "./controllers/CatController";
import { DogController } from "./controllers/DogController";

const routes = Router();

const authenticateController = new AuthenticateController();
const randomUserController = new RandomUserController();
const catController = new CatController();
const dogController = new DogController();
const clientController = new ClientController();

routes.get("/authenticate", authMiddleware, authenticateController.getProfile);
routes.post("/authenticate", authenticateController.login);

routes.get("/user", randomUserController.getUsers);
routes.get("/cat/:code", catController.getCat);
routes.get("/dog", dogController.getDog);

routes.get("/client", clientController.findAll);
routes.post("/client", clientController.create);
routes.put("/client/:id", clientController.update);
routes.delete("/client/:id", clientController.delete);

export default routes;
