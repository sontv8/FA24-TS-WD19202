// let myName: string[] ;

// myName= ["abcd"]

// let myData: [number, string, boolean];

// myData = [1,"abcd",true]

// const sontv:{id:string,name:string, email:string} = {
//     id: "1",
//     name: "sontv",
//     email: "abcd"
// }

// const car: { type: string, mileage?: number } = {
//     type: "Toyota"
//   };

//   car.mileage = 2000;
  

// function getData(data:{id:number, name:string, price:number}) {}

// const data:{id:number, name:string, price:number} = {id:1, name:"product 1", price:100}
// // getData(data)

/*
    định nghĩa kiểu dữ liệu cho 1 mảng
    các phần tử trong mảng là object
    mỗi object có các thuộc tính sau
        id
        name
        price
        image
        description (có thể có, có thể không)
*/

const data: {id:number|string, name:string, price:number,image:string, description?:string}[] = [
    {
        id: 1,
        name:"product 1",
        price:100,
        image:"abcd"
    },
    {
        id: "2",
        name:"product 1",
        price:100,
        image:"abcd",
        description:"abcd"
    }
]

const getData = ():{id:number,name:string,price:number} => {
    return {id:1,name:"product 1",price:100};
}

/*
Tạo 1 mảng đặt tên là products
mỗi sản phẩm trong mảng là 1 object
trong mỗi object sẽ có những thuộc tính sau: id, name, description, status

viết 1 hàm thực hiện chức năng thêm mới dữ liệu vào mảng
hàm này sẽ nhận vào 1 tham số là 1 object chứa đầy đủ thông tin của sản phẩm
sau khi thêm mới xong hàm này sẽ return về object vừa thêm mới

log ra giá trị return về của hàm
*/ 

// const products: {id:number,name:string, description:string,status:boolean}[] = [
//     {id:1, name:"product 1", description:"desc 1", status:true}
// ]

// const addProduct = (obj:{id:number,name:string,description:string,status:boolean}):{id:number,name:string,description:string,status:boolean} => {
//     products.push(obj)
//     return obj;
// }
// const newProduct = {id:2,name:"product 2",description:"desc 2",status:true,email:"abcd"}
// console.log(addProduct(newProduct));
// console.log(products);


type CarYear = number;
type BirthYear = number;

let myCarYear: number = 2024;
let myBirthYear: number = 1990;

type Data = {
    id:number,
    name:string,
    avatar:string
}
const myData: Data = {id:1,name:"sontv",avatar:"...."}
const studentData: Data ={id:2,name:"thienth",avatar:"..."}


// type TProduct = {
//     id:number,
//     name:string,
//     description:string,
//     status:boolean
// }
// const addProduct = (obj:Product):Product => {
//     return obj;
// }

// interface IProduct {
//     id:number,
//     name:string,
//     description:string,
//     status:boolean
// }
// const addProduct = (obj:IProduct):IProduct => {
//     return obj;
// }


// type Product = {
//     id:number,
//     name:string
// }

// type ProductStatus = {
//     status:boolean
// }

// type ProductData = Product & ProductStatus;
// const product: ProductData = {id:1,name:"Product 1",status:true}

interface Product {
    id:number,
    name:string
}
interface ProductData extends Product{
    status:boolean
}
// interface Product{
//     status:boolean
// }

const product: Product = {id:1,name:"Product 1",status:true}