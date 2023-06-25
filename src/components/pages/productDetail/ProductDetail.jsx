import { ItemCount } from "../../common/ItemCount";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  // const onAdd = (cantidad) => {
  //   let data = {
  //     ...productSelected,
  //     quantity: cantidad,
  //   };

  //   addToCart(data);
  // };
  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
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
