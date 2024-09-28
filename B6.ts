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
        description: true
    book2:
        id: "2"
        title: "Title 2"
        description: false
*/ 