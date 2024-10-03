import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface IProduct {
  id:string,
  name:string,
  price:number,
  image:string
}
const productList:IProduct[] = [
  {id:"1",name:"Product 1",price:100, image: "https://picsum.photos/200/120"},
  {id:"2",name:"Product 2",price:200, image: "https://picsum.photos/200/120"},
  {id:"3",name:"Product 3",price:300, image: "https://picsum.photos/200/120"}
]

function App() {
  const [products,setProducts] = useState(productList)
  const [product,setProduct] = useState({})

  const onHandleRemove = (id:number) => {
    // const newData = products.filter((item) => {
    //   return Number(item.id) != id
    // })
    // setProducts(newData)

    if(confirm("Bạn có muốn xoá không?")){
      setProducts(products.filter((item) => {
        return Number(item.id) != id
      }))
    }
  }

  const onHandleChange = (e) => {

    console.log(e.target.name);
    console.log(e.target.value);
    const {name,value} = e.target;
    setProduct({...product,[name]:value});
    // computed property name
    
  }
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const newData = [...products,{id:products.length + 1, ...product}]
    setProducts(newData)
  }

  return (
    <>
    {JSON.stringify(product)}
    <form onSubmit={onHandleSubmit}>
      <div className="form-group">
        <label htmlFor="">Tên sản phẩm</label>
        <input type="text" name='name' onInput={onHandleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="">Giá sản phẩm</label>
        <input type="text" name='price' onInput={onHandleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="">Ảnh sản phẩm</label>
        <input type="text"  name='image' onInput={onHandleChange}/>
      </div>
      <button>Thêm mới sản phẩm</button>
    </form>
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
        
        {products.map((product:IProduct) => {
        return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt="" /></td>
              <td><button onClick={() => onHandleRemove(Number(product.id))}>Delete</button></td>
            </tr>
        )
      })}
      </tbody>
    </table>
      
    </>
  )
}

export default App
