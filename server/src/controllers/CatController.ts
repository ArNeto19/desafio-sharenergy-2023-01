import express from "express";

export class CatController {
  async getCat(req: express.Request, res: express.Response) {
    const { code } = req.params;

    try {
      const response = await fetch(`https://http.cat/${code}`);

      return res.status(200).json({ cat: response.url });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: `Internal server error: ${error}` });
    }
  }
}
