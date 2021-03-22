import { Component, OnInit } from '@angular/core';
import {GetBandsService} from '../services/get-bands.service';
import { HttpClient} from '@angular/common/http';
import { UrlService } from '../services/url.service';


@Component({
  selector: 'app-join-band',
  templateUrl: './join-band.component.html',
  styleUrls: ['./join-band.component.css']
})
export class JoinBandComponent implements OnInit {
  baseUrl: string = this.urlServ.baseUrl;
  name:String
  data:any;
  constructor(private bandData: GetBandsService, private http: HttpClient, private urlServ: UrlService) { }

  ngOnInit(): void {
    this.bandData.getBands().subscribe((result)=>{
      console.log(result);
      this.data=result;
    })
  }

  joinBand(b:any){
    let url= this.baseUrl+"/bands/join/"+b.id;
    this.http.put(url,{},{withCredentials: true}).subscribe((result)=>{
      console.log(result);
    })
  
  }

}
