import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';
import {UrlService} from '../url.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    loggedInUser: User;
    
    constructor(private http: HttpClient, private urlServ: UrlService) { }

    register(): Observable<User> {
        let username = (<HTMLInputElement>document.getElementById('username-reg')).value;
        let password = (<HTMLInputElement>document.getElementById('password-reg')).value;
        let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
        let lastName = (<HTMLInputElement>document.getElementById('lastName')).value;

        (<HTMLInputElement>document.getElementById('username-reg')).value = '';
        (<HTMLInputElement>document.getElementById('password-reg')).value = '';
        (<HTMLInputElement>document.getElementById('firstName')).value = '';
        (<HTMLInputElement>document.getElementById('lastName')).value = '';
    
        let newUser = new User(username, password, firstName, lastName);

        return this.http.post(this.urlServ.baseUrl + '/user/register', newUser).pipe(map(response => response as User));

    }

}
