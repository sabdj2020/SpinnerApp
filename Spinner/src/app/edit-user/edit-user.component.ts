import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { EditUserService } from '../services/edit-user.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private httpClient: HttpClient ,private editUserService: EditUserService,private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }
  
  user: User;
  editForm: FormGroup;
  public selectedFile;
  public event1;
  imgURL: any;
  profilePicData: any;
  base64Data: any;
  convertedImage: any; 

  title = 'ImageUploaderFrontEnd';
  
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

  public onFileChange(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.targget.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  onUpload(){
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:4200/edit-profile/upload', uploadData).subscribe(
      res => {console.log(res);
      this.profilePicData = res;
      this.base64Data = this.profilePicData.pic;
      this.convertedImage = 'data:image/jpeg;base64,'+this.base64Data;},
      err => console.log('Error Occured during saving: '+ err)
    );
  }

}
