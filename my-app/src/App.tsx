import { ChangeEvent, EventHandler, FormEventHandler, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductManagement from './pages/ProductManagement'
import { IProduct } from './interfaces/Product'

function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  // const [product,setProduct] = useState({})

  useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data)=> setProducts(data))
  },[])

  const onHandleRemove = (id:number) => {
    console.log("App:", id);
    
    // if(confirm("Bạn có muốn xoá không?")){
    //   fetch(`http://localhost:3000/products/${id}`,{
    //     method:"DELETE"
    //   }).then(() => setProducts(products.filter((item) => {
    //     return Number(item.id) != id
    //   })))
    // }
  }

  // const onHandleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   const {name,value} = e.target;
  //   setProduct({...product,[name]:value});
  //   // computed property name
  // }
  // const onHandleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const newData:any = [...products,{id:products.length + 1, ...product}]
  //   setProducts(newData)
  // }

  return (
    <>
    {/* <form onSubmit={onHandleSubmit}>
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
     */}
    <Routes>
      <Route path='/admin' element={<HomePage />}/>
      <Route path='/admin/products' element={<ProductManagement products={products} onHandleRemove={onHandleRemove}/>}/>
    </Routes>
     {/* 
        - /         Home
        - /products Product


        - /admin    Admin
        - /admin/products  Admin Products
     */}
      
    </>
  )
}

export default App
