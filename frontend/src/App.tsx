import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/auth";
import MainRoutes from "./routes";
import { Layout } from "./components/Layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Layout>
          <MainRoutes />
        </Layout>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
