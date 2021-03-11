import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService{
  constructor(private http: Http){  }
  login(username: string, password: string){
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: passwd}))
    .map((response: Response) => {
      let user = response.json( );
      if (user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    })
  }
  logout( ){
    localStorage.removeItem('currentUser');
  }
}
