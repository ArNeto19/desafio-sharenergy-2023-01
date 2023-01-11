import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const login = async (
  username: string | undefined,
  password: string | undefined,
  rememberMe: boolean
) => {
  try {
    const res = await api.post("/authenticate", { username, password, rememberMe });

    if (res.data.rememberToken) {
      localStorage.setItem("rememberToken", `Bearer ${res.data.rememberToken}`);
    }

    localStorage.setItem("loginToken", `Bearer ${res.data.loginToken}`);

    return true;
  } catch (error) {
    console.log(error);
    alert("Invalid username or password.");
    return false;
  }
};
