import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASS = process.env.MONGO_PASS || "";
const MONGO_URL = `mongodb+srv://admin-${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wx5ya.mongodb.net/shareEnergyChallengeDB`;
const JWT_PASS = process.env.JWT_PASS || "";

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  jwt: {
    secret: JWT_PASS,
  },
};
