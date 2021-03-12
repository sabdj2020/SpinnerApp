import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  baseUrl: string = 'http://localhost:8080/Spinner';
  name:String

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }
  createBand(){
    let url= this.baseUrl+"/bands"
    this.http.post(url,{
      name:this.name
    }).subscribe((result)=>{
      console.log(result);
    })
  }

}
