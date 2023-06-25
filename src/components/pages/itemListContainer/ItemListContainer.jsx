import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
  border: "2px solid red",
  padding: "20px",
  background: "#F0E68C",
  width: "fit-content",
  height: "80px",
};

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 500);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "150px",
        }}
      >
        <ScaleLoader cssOverride={objetoLoader} color="#36d7b7" />
      </div>
    );
  }

  return (
    <>
      <ItemListPresentacional items={items} />;<h1>{greeting}</h1>;
    </>
  );
};
