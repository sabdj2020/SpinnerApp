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
<<<<<<< HEAD
import { FileUploadComponent } from './file-upload/file-upload.component';
=======
import { JoinBandComponent } from './join-band/join-band.component';
>>>>>>> 5ae25620f30801e972e04cd9e9631cf34be810ca


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
<<<<<<< HEAD
>>>>>>> 3ef4b87b672e1cd75c2cc5b47c6dcae80533db6e
    BandComponent,
FileUploadComponent
=======
    BandComponent,
    JoinBandComponent
>>>>>>> 5ae25620f30801e972e04cd9e9631cf34be810ca
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
