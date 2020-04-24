import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from "@angular/common/http";
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
      "Content-Type":"application/json; charset=utf8"
    });
   }

  /**
   * Get all news from the database
   */
  public getUserTweets(user : user): Observable<HttpResponse<tweet[]>>  {   
    return this.http.get<tweet[]>(this.accessPointURL+"/findUserTweets/"+user.id,{        
      observe:'response'
    });
  }
}
