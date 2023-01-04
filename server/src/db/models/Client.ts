import { Schema, model } from "mongoose";

export interface IClient {
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

export const clientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
});

export const Client = model<IClient>("Client", clientSchema);
