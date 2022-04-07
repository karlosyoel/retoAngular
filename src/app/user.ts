
export class User{
    user:string = "";
    password:string = "";
    remember:boolean = false;
    nombre:string = "";
    apellidos:string = "";
    email:string = "";
}

export let _userLogin:User = {
    user: "",
    password: "",
    remember: false,
    nombre: "",
    apellidos: "",
    email: ""
};