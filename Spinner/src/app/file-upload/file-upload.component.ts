import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  imageLink: string = "";
  loading: boolean = false;
  file: File = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onChange(event){
    this.file = event.target.files[0];
  }

  onUpload(){
    this.loading=!this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof(event) === 'object'){
          this.imageLink = event.link;
          this.loading = false;
        }
      }
    );
  }
}
