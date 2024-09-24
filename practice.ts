interface IProject {
    id:number,
    name:string,
    image:string,
    link:string,
    member:number
}

const projectList: IProject[] = [
    {id:1,name:"Project 1",image:"https://picsum.photos/200/120",link:"https://www.google.com",member:5},
    {id:2,name:"Project 2",image:"https://picsum.photos/200/120",link:"https://www.google.com",member:5},
    {id:3,name:"Project 3",image:"https://picsum.photos/200/120",link:"https://www.google.com",member:5}
]

const projectDiv = document.querySelector("#project")

const listProject = (data:IProject[]):void => {
    for(let item of data){
        projectDiv.innerHTML += `
            <h2>${item.name}</h2>
            <img src=${item.image} alt="" />
            <p><a href=${item.link}>Project Link</a></p>
            <p>${item.member}</p>
        `
        
    }
}

listProject(projectList)