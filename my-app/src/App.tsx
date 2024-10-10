import { ChangeEvent, EventHandler, FormEventHandler, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductManagement from './pages/ProductManagement'
import { IProduct } from './interfaces/Product'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  const [product,setProduct] = useState({})

  const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data)=> setProducts(data))
  },[])

  const onHandleRemove = (id:number) => {
    // console.log("App:", id);
    
    if(confirm("Bạn có muốn xoá không?")){
      fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE"
      }).then(() => setProducts(products.filter((item) => {
        return item.id != id
      })))
    }
  }

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const {name,value} = e.target;
    setProduct({...product,[name]:value});
    // computed property name
  }
  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product)
    }).then((newProduct) => newProduct.json()).then((data)=> {
      setProducts([...products,data])
      navigate("/admin/products")
    })
    
    // const newData:any = [...products,{id:products.length + 1, ...product}]
    // setProducts(newData)
  }

  return (
    <>
    <Routes>
      <Route path='/admin' element={<HomePage />}/>
      <Route path='/admin/products' element={<ProductManagement products={products} onHandleRemove={onHandleRemove}/>}/>
      <Route path="/admin/products/add" element={<AddProduct onHandleChange={onHandleChange} onHandleSubmit={onHandleSubmit}/>}/>
      <Route path="/admin/products/:id/update" element={<UpdateProduct products={products}/>}/>
    </Routes>
    </>
  )
}

export default App

/*
  Update:
    B1: tạo component UpdateProduct.tsx
    B2: tạo router
    B3: lấy id sản phẩm trên url
    B4: lấy thông tin sản phẩm cần update dựa vào id
    B5: hiển thị thông tin sản phẩm cần update vào form
    B6: lấy thông tin mới từ form
    B7: call api và update dữ liệu mới
    B8: hiển thị lại danh sách sản phẩm
*/ 
