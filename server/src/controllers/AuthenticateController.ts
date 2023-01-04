import express from "express";
import jwt from "jsonwebtoken";

import { config } from "../config/config";
import { LoginUser } from "../db/loginUser";

export class AuthenticateController {
  async login(req: express.Request, res: express.Response) {
    const { username, password, rememberMe } = req.body;

    if (username !== LoginUser.username || password !== LoginUser.password) {
      return res.status(403).json({ message: "Invalid username or password" });
    }

    if (rememberMe) {
      const token = jwt.sign({ username, password }, config.jwt.secret || "", { expiresIn: "24h" });

      return res.json({ message: "User successfully logged!", token });
    }

    return res.json({ message: "User successfully logged!" });
  }

  async getProfile(req: express.Request, res: express.Response) {
    res.json(req.user);
  }
}
