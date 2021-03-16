import { Component, OnInit } from '@angular/core';
import {GetBandsService} from '../services/get-bands.service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-join-band',
  templateUrl: './join-band.component.html',
  styleUrls: ['./join-band.component.css']
})
export class JoinBandComponent implements OnInit {
  baseUrl: string = 'http://localhost:8080/Spinner';
  name:String
  data:any;
  constructor(private bandData: GetBandsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.bandData.getBands().subscribe((result)=>{
      console.log(result);
      this.data=result;
    })
  }

  joinBand(b:any){
    let url= this.baseUrl+"/bands/join/"+b.id;
    this.http.put(url,{withCredentials: true}).subscribe((result)=>{
      console.log(result);
    })
  
  }

}
