import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser : User;
  baseUrl : string;
  
  constructor(private userServ: UserService) { 
    
  }

  ngOnInit(): void {}

}
