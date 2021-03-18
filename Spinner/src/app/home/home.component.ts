import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public userServ: UserService, public spotifyServ: SpotifyService) { 

  }

  ngOnInit(): void {
    this.spotifyServ.getKey().subscribe(
      resp => {
        this.spotifyServ.token = resp;
      }
    );

    this.userServ.getLoggedInUser();
  }

  

}
