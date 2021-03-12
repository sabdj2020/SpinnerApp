import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    register(): void {
        let username = (<HTMLInputElement>document.getElementById('username-reg')).value;
        let password = (<HTMLInputElement>document.getElementById('username-reg')).value;
        let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
        let lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
    
        let newUser = new User(username, password, firstName, lastName);

        this.http.post('http://localhost:8080/Spinner/user/register', JSON.stringify(newUser));
    
    }

}
