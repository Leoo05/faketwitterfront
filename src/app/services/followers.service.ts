import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { follow } from "../model/follow.model";
import { user } from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FollowersService {
    private headers: HttpHeaders;
    private accessPointURL: string = "http://localhost:3000/followers";
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            "Content-Type": "application/json; charset=utf8"
        });
    }
    public insertFollowers(follow : follow){
        return this.http.post(this.accessPointURL,follow,{
            headers:this.headers
        })
    }
    public getFollowers(follow : follow) : Observable<HttpResponse<follow[]>>{
        return this.http.get<follow[]>(this.accessPointURL,{
            observe:'response'
        });
    }
}
