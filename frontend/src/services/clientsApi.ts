import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export interface IClient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

export const getClients = async () => {
  try {
    let res = await api.get("/client");

    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createClient = async (
  name: string,
  cpf: string,
  email: string,
  phone: string,
  address: string
) => {
  try {
    let res = await api.post("/client", { name, cpf, email, phone, address });
    if (res) {
      return true;
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível cadastrar o cliente.");
    return false;
  }
};

export const updateClient = async (
  id: string,
  name: string | undefined,
  email: string | undefined,
  phone: string | undefined,
  address: string | undefined
) => {
  try {
    let res = await api.put(`/client/${id}`, { name, email, phone, address });
    if (res) {
      return true;
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível atualizar o cliente.");
    return false;
  }
};

export const deleteClient = async (id: string) => {
  try {
    let res = await api.delete(`/client/${id}`);
    if (res) {
      return true;
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível remover o cadastro do cliente.");
    return false;
  }
};
