import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { booleanReturn } from "../model/booleanresponse.model";
import { user } from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private headers: HttpHeaders;
    private accessPointURL: string = "http://localhost:3000/users";
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            "Content-Type": "application/json; charset=utf8"
        });
    }

    public authenticateUser(user: user): Observable<HttpResponse<booleanReturn>> {    
        return this.http.get<booleanReturn>(this.accessPointURL + "/" + user.user + "/" + user.password, {
            observe: 'response'
        });
    }

    public createUser(user: user) {
        return this.http.post(this.accessPointURL, user, {
            headers: this.headers
        });
    }
    public deleteUser(user : user){
        return this.http.delete(this.accessPointURL+"/"+ user.idUser);
    }


    public findUserByUsername(user : user) : Observable<HttpResponse<user>>{
        return this.http.get<user>(this.accessPointURL+"/findUserByUsername",{
            observe:'response'
        })
    }
}