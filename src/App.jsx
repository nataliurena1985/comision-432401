// import CartWidget from "./components/common/cartwidget/CartWidget";
import Layout from "./components/layout/Layout";

import CartContainer from "./components/pages/cart/CartContainer";
// import Fetching from "./components/pages/fetching/Fetching";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const greeting = "Bienvenido";
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <div>
//       <Navbar />
//       <ItemListContainer greeting={greeting} />
//       <ProductDetailContainer />
//       {/* <Fetching /> */}
//     </div>
