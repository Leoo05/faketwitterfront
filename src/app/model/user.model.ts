export class user{
    id : number;
    user : string;
    password : string;

    constructor (user, password){
        this.user = user;
        this.password = password;
    }
}