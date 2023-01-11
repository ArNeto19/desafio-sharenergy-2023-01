import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export interface IDogResponse {
  fileSizeBytes: number;
  url: string;
}

export const getDog = async () => {
  try {
    const res = await api.get(`/dog`);

    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
