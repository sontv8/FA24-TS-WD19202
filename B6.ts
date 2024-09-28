// Generics

function getData<T>(data: T){
    return data;
}

getData<string>("abcd")
getData<number>(123)
getData<{id:number}>({id:1})
getData<{id:number,name:string}[]>([{id:1,name:"abc"}])

interface IProduct<A,B> {
    id: A,
    name: B
}

const product1:IProduct<number,string> = {
    id:1,
    name:"Product 1"
}

const product2: IProduct<string,string> = {
    id:"1",
    name:"Product 2"
}

/*
    sử dụng generics để định nghĩa kiểu dữ liệu cho 1 mảng chứa nhiều object
    mỗi object sẽ có 3 thuộc tính: id, title, status
    khai báo 2 biến book1 và book2:
    book1: 
        id: 1
        title: "Title 1"
        status: true
    book2:
        id: "2"
        title: "Title 2"
        status: "desc 2"
*/ 

interface IBook<A,B,C>{
    id: A,
    title:B,
    status:C
}

const myBooks:IBook<number,string,boolean>[] = [
    {id:1,title:"Title 1",status:true},
    {id:2,title:"Title 2",status:false},
    {id:3,title:"Title 3",status:true},
]
const book1:IBook<number,string,boolean> = {
    id:1,
    title:"Title 1",
    status:true
}

const yourBooks:IBook<string,string,string>[] = [
    {id:"1",title:"Title 1",status:"true"},
    {id:"2",title:"Title 2",status:"false"},
    {id:"3",title:"Title 3",status:"true"},
]
const book2: IBook<string,string,string> = {
    id:"2",
    title:"Title 2",
    status:"desc 2"
}

const product:{id:number,name:string,desc?:string} = {
    id:1,
    name:"abcd"
}
interface IProps {
    id?:number,
    name?:string,
    desc?:string
}

// const prop: Partial<IProps> = {

// }

// const prop: Required<IProps> = {}


interface Person {
    name: string;
    age: number;
    location?: string;
  }

  type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = 123; // a string cannot be used here since Exclude removed it from the type.