export class tweet {
    idTweet : number;
    idUser : string;
    message: string;
    published_date: string;

    constructor(idUser, messge, date){
        this.idUser = idUser;
        this.message = messge;
        this.published_date = date;
    }
}