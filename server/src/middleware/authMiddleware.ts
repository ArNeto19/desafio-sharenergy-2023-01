import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { config } from "../config/config";

export const authMiddleware = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized. No validation token found." });
  }

  const token: string = authorization.split(" ")[1];

  const { username, exp } = jwt.verify(token, config.jwt.secret ?? "") as JwtPayload;

  if (!username) {
    return res.status(403).json({ message: "Forbidden access. No username found." });
  }

  req.user = { username, exp };

  next();
};
