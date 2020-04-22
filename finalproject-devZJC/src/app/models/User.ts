export class User { 
    id: Number;
    userName:string; 
    nickName:string;
    password:string;

    constructor(nickName:string,userName:string,password:string) { 
        this.userName = userName;
        this.nickName = nickName;
        this.password = password;
    }    
}
