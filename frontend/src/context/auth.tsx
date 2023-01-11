import axios from "axios";
import { createContext, useState, ReactNode } from "react";

type AuthContextProps = {
  children: ReactNode;
};

type AuthContextType = {
  isUserAuthenticated: boolean;
  authenticate: () => Promise<boolean | undefined>;
  logout: () => void;
};

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    Boolean(localStorage.getItem("loginToken"))
  );

  const authenticateLogin = async (Authorization: string) => {
    try {
      let res = await api.get("/authenticate", {
        headers: {
          Authorization,
        },
      });
      if (res.data) {
        setIsUserAuthenticated(true);

        //todo: verificar se token está expirado e tratar;

        return true;
      }
    } catch (error) {
      console.log(error);
      setIsUserAuthenticated(false);
    }
  };

  const authenticate = async () => {
    const loginToken = localStorage.getItem("loginToken");

    if (loginToken) {
      const loggedIn = await authenticateLogin(loginToken);

      if (loggedIn) {
        return true;
      }
    }

    const rememberToken = localStorage.getItem("rememberToken");

    if (rememberToken) {
      return await authenticateLogin(rememberToken);
    }

    return false;
  };

  const logout = () => {
    localStorage.clear();

    setIsUserAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        authenticate,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
