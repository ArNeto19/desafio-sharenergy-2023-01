import express from "express";

export class RandomUserController {
  async getUsers(req: express.Request, res: express.Response) {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?seed=abc&inc=name,dob,email,login,picture&results=80"
      );
      const responseData = await response.json();

      return res.status(200).json(responseData);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
