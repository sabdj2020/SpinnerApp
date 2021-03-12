import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BandPostComponent } from './band-post/band-post.component';
import { FormsModule } from '@angular/forms';
import { BandComponent } from './band/band.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchItemComponent,
    SearchComponent,
    RegisterComponent,
<<<<<<< HEAD
    LoginComponent
    BandPostComponent
=======
    BandPostComponent,
>>>>>>> 3ef4b87b672e1cd75c2cc5b47c6dcae80533db6e
    BandComponent,
FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
