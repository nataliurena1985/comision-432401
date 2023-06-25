// import CartWidget from "./components/common/cartwidget/CartWidget";
import Layout from "./components/layout/Layout";

// import Fetching from "./components/pages/fetching/Fetching";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";
import CartContextProvider from "./context/CartContext";

import ThemeContextProvider from "./context/temeContext";
import "./App.css";
const App = () => {
  const greeting = "Bienvenido";
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route element={<Layout />}>
              {menuRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>

            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </ThemeContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
