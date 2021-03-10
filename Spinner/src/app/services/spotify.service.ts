import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getKey() {
    const url: string = 'https://accounts.spotify.com/api/token';

    const body = 'grant_type=client_credentials';
    let encoded = 'ZTNmM2U2NjE0NThkNDg1Njk4MmQwZTZlNWYwNjYwYjU6ZDFkMjdkMmRkNmM0NGE5Mjg2N2ZhMDMxY2U2M2Y5MDU=';

    const headers = new HttpHeaders({
      Authorization: `Basic ${encoded}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(url, body, { headers }).pipe(map(resp => resp as Token));
  }

  public getQuery(query: string, token: Token) {
    
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token
    });

    return this.http.get(url, { headers });
  }
}
