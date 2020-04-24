export class tweet {
    idTweet : number;
    idUser : number;
    message: string;
    date: Date;

    constructor(idUser, messge, date){
        this.idUser = idUser;
        this.message = messge;
        this.date = date;
    }
}