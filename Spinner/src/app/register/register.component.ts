import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  doClick(): void {
  
  }

  toggle(): void {
    document.getElementById('loginForm').toggleAttribute('hidden');
    document.getElementById('to-login').toggleAttribute('disabled');
    document.getElementById('registerForm').toggleAttribute('hidden');
    document.getElementById('to-register').toggleAttribute('disabled');
  }

}
