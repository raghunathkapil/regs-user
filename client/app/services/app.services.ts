import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RegistrationService {

    constructor(private http: Http) {}

    addUser(userData){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/user/addUser", JSON.stringify(userData), { headers: headers})
                        .map(response => response.json());
    }
}