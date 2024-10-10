import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const UpdateProduct = ({products}) => {
    const [product,setProduct] = useState({})
    
    const navigate = useNavigate();
    const {id} = useParams()
    const currentProduct = products.find((item) => item.id == id)
    console.log(currentProduct);
    
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const {name,value} = e.target;
        setProduct({...product,[name]:value});
        // computed property name
      }

      const onUpdate = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/products/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        }).then(() => navigate("/admin/products"))
      }
    
    return <div>
        <h1>Cap nhat san pham</h1>
        <form onSubmit={onUpdate}>
            <div className="form-group">
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" name='name' onInput={onHandleChange} defaultValue={currentProduct?.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Giá sản phẩm</label>
                <input type="text" name='price' onInput={onHandleChange} defaultValue={currentProduct?.price}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Ảnh sản phẩm</label>
                <input type="text"  name='image' onInput={onHandleChange} defaultValue={currentProduct?.image}/>
            </div>
            <button>Cập nhật sản phẩm</button>
        </form>
    </div>
}

export default UpdateProduct