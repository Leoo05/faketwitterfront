export class tweet {
    user: string;
    text: string;
    date: string;
    likes: number;

    constructor (user, text){
        this.user = user;
        this.text = text;
    }
}