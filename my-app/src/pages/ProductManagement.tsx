import { IProduct } from "../interfaces/Product"
const ProductManagement = (props) => {
    // console.log("Product Management Page: ",props.onHandleRemove());// {products: [{},{}...]}
    
    return <div>
        <h1>Danh sach san pham</h1>
        <table>
      <thead>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Giá sản phẩm</th>
          <th>Ảnh sản phẩm</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        
        {props.products.map((product:IProduct) => {
        return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt="" /></td>
              <td><button onClick={() => props.onHandleRemove(Number(product.id))}>Delete</button></td>
            </tr>
            
        )
      })}
      </tbody>
    </table>
    </div>
}

export default ProductManagement