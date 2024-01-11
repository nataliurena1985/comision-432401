import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Container, Row } from "react-bootstrap";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      // los filtrados
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      // todos
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScaleLoader color="steelblue" width={40} height={111} />
      </div>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #59E16B, #74A8D7)",

        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        <Row className="row-cols-1 row-cols-md-3 g-2 ">
          <ItemListPresentacional items={items} />;<h1>{greeting}</h1>;
        </Row>
      </Container>
    </div>
  );
};
