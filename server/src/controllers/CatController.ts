import express from "express";

export class CatController {
  async getCat(req: express.Request, res: express.Response) {
    const { code } = req.params;

    try {
      const response = await fetch(`https://http.cat/${code}`);

      res.status(200).json({ cat: response.url });
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const response = await fetch(`https://http.cat/${code}`);

    //   const responseData = await response.json();

    //   return res.status(200).json(responseData);
    // } catch (error) {
    //   return error;
    // }
  }
}
