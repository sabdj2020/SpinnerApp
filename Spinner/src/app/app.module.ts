import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { BandPostComponent } from './band-post/band-post.component';
import { FormsModule } from '@angular/forms';
import { BandComponent } from './band/band.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { JoinBandComponent } from './join-band/join-band.component';
import { PostItemComponent } from './post-item/post-item.component';
import { BandSnapshotComponent } from './band-snapshot/band-snapshot.component';
<<<<<<< HEAD
import { UserProfileComponent } from './user-profile/user-profile.component';
=======
import { MDBBootstrapModule } from 'angular-bootstrap-md';
>>>>>>> 385edce5d920a7e8675c5ef7184e222a46d9a3d4


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchItemComponent,
    SearchComponent,
    RegisterComponent,
    BandPostComponent,
    BandComponent,
    FileUploadComponent,
    JoinBandComponent,
    PostItemComponent,
    BandSnapshotComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
