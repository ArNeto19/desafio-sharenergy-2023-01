import express from "express";
import mongoose from "mongoose";

import { config } from "../config/config";
import { Client } from "../db/models/Client";
import { isCPFValid } from "../middleware/cpfMiddleware";

mongoose.set("strictQuery", true);

export class ClientController {
  async create(req: express.Request, res: express.Response) {
    const { name, email, phone, address, cpf } = req.body;

    await mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" });

    const clientExists = await Client.findOne({ cpf });

    if (clientExists) {
      return res.status(409).json({ message: `O CPF: ${clientExists.cpf} já está cadastrado.` });
    }

    if (!isCPFValid(cpf)) {
      console.log();
      return res.status(409).json({ message: "O CPF informado não é válido." });
    }

    const isEmailValid = email.includes("@");

    if (!isEmailValid) {
      return res.status(409).json({ message: "O email informado não é válido." });
    }

    try {
      const client = new Client({
        name,
        email,
        phone,
        address,
        cpf,
      });

      await client.save();

      return res
        .status(201)
        .json({ message: `Novo cliente adicionado com sucesso!`, cliente: client });
    } catch (error) {
      return res.status(500).json({ message: `Internal server error: ${error}` });
    }
  }

  async findAll(req: express.Request, res: express.Response) {
    await mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" });

    try {
      const clientList = await Client.find({});

      return res.json(clientList);
    } catch (error) {
      return res.status(500).json({ Message: `Internal server error: ${error}` });
    }
  }

  async update(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;

    try {
      await mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" });

      const client = await Client.findByIdAndUpdate(
        id,
        { name, email, phone, address },
        { runValidators: true, overwrite: false, returnDocument: "after" }
      );

      if (!client) {
        return res
          .status(200)
          .json({ Message: "Não foi possível encontrar o cadastro do cliente." });
      }

      return res
        .status(200)
        .json({ Message: "Os dados do cliente foram atualizados com sucesso.", Cliente: client });
    } catch (error) {
      return res.status(500).json({ Message: `Internal server error: ${error}` });
    }
  }

  async delete(req: express.Request, res: express.Response) {
    const { id } = req.params;

    try {
      await mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" });

      const client = await Client.findByIdAndDelete(id);

      if (!client) {
        return res
          .status(200)
          .json({ Message: "Não foi possível encontrar o cadastro do cliente." });
      }

      return res
        .status(200)
        .json({ Message: `O cliente de CPF: ${client?.cpf} apagado com sucesso.` });
    } catch (error) {
      return res.status(500).json({ Message: `Internal server error: ${error}` });
    }
  }
}
