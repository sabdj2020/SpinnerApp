import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBandsService {
  url="http://localhost:8080/Spinner/bands";

  constructor(private http:HttpClient) { }
  getBands(){
    return this.http.get(this.url, {withCredentials: true})
  }

  
}
