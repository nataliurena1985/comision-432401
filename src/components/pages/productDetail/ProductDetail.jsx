import { ItemCount } from "../../common/ItemCount";
import "./productDetail.css";
const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
      <div>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
      </div>

      <ItemCount
        stock={productSelected.stock}
        initial={cantidad}
        onAdd={onAdd}
      />
    </>
  );
};

export default ProductDetail;
