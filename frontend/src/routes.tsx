import { Route, Routes } from "react-router-dom";

import { Cats } from "./pages/Cats";
import { Clients } from "./pages/Clients";
import { Dogs } from "./pages/Dogs";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
};

export default MainRoutes;
