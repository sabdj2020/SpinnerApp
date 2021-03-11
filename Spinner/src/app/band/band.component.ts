import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  name:String

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }


  createBand(){
    let url="http://localhost:8080/Spinner/bands/"
    this.http.post(url,{
      name:this.name
    }).toPromise().then((data:any)=>{
      console.log(data);
    })
  }

}
