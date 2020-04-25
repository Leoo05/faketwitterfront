export class user{
    idUser : number;
    username : string;
    password : string;
    creation_date : Date;

    constructor (user, password){
        this.username = user;
        this.password = password;
    }    
}