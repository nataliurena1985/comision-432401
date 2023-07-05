import ProductCart from "../../common/productCard/ProductCart";
import "./ItemList.css";

const ItemListPresentacional = ({ items }) => {
  // console.log(items);
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCart key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemListPresentacional;
