import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { tweet } from "../model/tweet.model";
import { user } from "../model/user.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TweetsService {
    private headers: HttpHeaders;
    private accessPointURL: string = "http://localhost:3000/tweets";
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            "Content-Type": "application/json; charset=utf8"
        });
    }

    /**
     * Get all news from the database
     */
    public getUserTweets(user: user): Observable<HttpResponse<tweet[]>> {
        return this.http.get<tweet[]>(this.accessPointURL + "/findUserTweets/" + user.idUser, {
            observe: 'response'
        });
    }
    public createTweet(tweet: tweet) {
        console.log("SERVICIO PUBLCIAR");
        return this.http.post(this.accessPointURL, tweet, {
            headers: this.headers
        });
    }
    public deleteTweet(tweet: tweet) {
        return this.http.delete(this.accessPointURL + "/deleteTweet/" + tweet.idTweet);
    }
    public getAllTweets(): Observable<HttpResponse<tweet[]>> {
        return this.http.get<tweet[]>(this.accessPointURL, {
            observe: 'response'
        });
    }    
}
