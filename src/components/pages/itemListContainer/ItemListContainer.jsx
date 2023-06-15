import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { useParams } from "react-router";
export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  return (
    <>
      <ItemListPresentacional items={items} />;<h1>{greeting}</h1>;
    </>
  );
};
