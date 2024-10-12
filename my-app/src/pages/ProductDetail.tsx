import { useParams } from "react-router-dom";

const ProductDetail = ({products}) => {
  const {id} = useParams()
  const currentProduct = products.find((item) => item.id == id)
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div>
        <img src={currentProduct.image} alt="" />
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
