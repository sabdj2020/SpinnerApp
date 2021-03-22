import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { EditUserService } from '../services/edit-user.service'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  imageLink: string = "";
  loading: boolean = false;
  file: File = null;
  constructor(private editUserService: EditUserService,private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      passwd: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        });
  }

  onChange(event){
    this.file = event.target.files[0];
  }

  onUpload(){
    this.loading=!this.loading;
    console.log(this.file);
    this.editUserService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof(event) === 'object'){
          this.imageLink = event.link;
          this.loading = false;
        }
      }
    );
  }

  update() {
    
  }

}
