import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class GetBandsService {
  url: string;

  constructor(private http:HttpClient, private urlServ: UrlService) {
    this.url = this.urlServ.baseUrl + '/bands';
   }

  getBands(){
    return this.http.get(this.url, {withCredentials: true})
  }

  
}
