export class user{
    idUser : number;
    user : string;
    password : string;
    creation_date : Date;

    constructor (user, password){
        this.user = user;
        this.password = password;
    }
}