import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export interface IRandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const getUsers = async ({from, to}: any) => {
  try {
    const res = await api.get("/user");
   
    
    if (res.data) {
        const users = res.data.results.slice(from, to);
        const count = res.data.results.length

      return {users, count};
    }

    return;
  } catch (error) {
    console.log(error);
    return;
  }
};
