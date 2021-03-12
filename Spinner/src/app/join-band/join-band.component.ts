import { Component, OnInit } from '@angular/core';
import {GetBandsService} from '../services/get-bands.service'

@Component({
  selector: 'app-join-band',
  templateUrl: './join-band.component.html',
  styleUrls: ['./join-band.component.css']
})
export class JoinBandComponent implements OnInit {
  data:any;
  constructor(private bandData: GetBandsService) { }

  ngOnInit(): void {
    this.bandData.getBands().subscribe((result)=>{
      console.log(result);
      this.data=result;
    })
  }

  joinBand(){

  }

}
