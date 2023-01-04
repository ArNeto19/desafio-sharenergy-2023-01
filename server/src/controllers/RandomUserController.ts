import express from "express";

export class RandomUserController {
  async getUsers(req: express.Request, res: express.Response) {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?inc=name,dob,email,login,picture&results=10"
      );
      const responseData = await response.json();

      return res.status(200).json(responseData);
    } catch (error) {
      return error;
    }
  }
}
