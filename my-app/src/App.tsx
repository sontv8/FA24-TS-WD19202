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

  return (
    <>
      {products.map((product) => {
        return <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <img src={product.image} alt="" />
          <div><button>Delete</button></div>
          
        </div>
      })}
    </>
  )
}

export default App
