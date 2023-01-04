import express from "express";

export class DogController {
  async getDog(req: express.Request, res: express.Response) {
    try {
      const response = await fetch(`https://random.dog/woof.json`);

      const responseData = await response.json();

      return res.status(200).json(responseData);
    } catch (error) {
      return error;
    }
  }
}
