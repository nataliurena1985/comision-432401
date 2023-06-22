import Form from "../components/pages/Form/Form";
import FormFormik from "../components/pages/Form/FormFormik";

import CartContainer from "../components/pages/cart/CartContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
];
