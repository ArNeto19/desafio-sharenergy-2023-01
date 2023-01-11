import express from "express";
import jwt from "jsonwebtoken";

import { config } from "../config/config";
import { LoginUser } from "../db/loginUser";

export class AuthenticateController {
  async login(req: express.Request, res: express.Response) {
    const { username, password, rememberMe } = req.body;

    if (username !== LoginUser.username || password !== LoginUser.password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const loginToken = jwt.sign({ username, password }, config.jwt.secret || "", {
      expiresIn: "1h",
    });

    if (rememberMe) {
      const rememberToken = jwt.sign({ username, password }, config.jwt.secret || "", {
        expiresIn: "24h",
      });

      return res.json({ message: "User successfully logged!", rememberToken, loginToken });
    }

    return res.json({ message: "User successfully logged!", loginToken });
  }

  async getProfile(req: express.Request, res: express.Response) {
    res.json(req.user);
  }
}
