import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private userServ: UserService) { 
  }

  ngOnInit(): void {
  }

  doClick(): void {
  
  }

  register(): void {
    this.userServ.register().subscribe(response => {this.userServ.loggedInUser = response});
  }

  toggle(): void {
    document.getElementById('loginForm').toggleAttribute('hidden');
    document.getElementById('to-login').toggleAttribute('disabled');
    document.getElementById('registerForm').toggleAttribute('hidden');
    document.getElementById('to-register').toggleAttribute('disabled');
  }

}
