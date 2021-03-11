import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
=======
import { BandPostComponent } from './band-post/band-post.component';
import { FormsModule } from '@angular/forms';
>>>>>>> 1dcf0be1eed7f58418e975f72fcc63135e9e5e93
import { BandComponent } from './band/band.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> ef4ec7201b3fcd4e05981d231ed94519a7cac386

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchItemComponent,
    SearchComponent,
    RegisterComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    LoginComponent
=======
=======
    BandPostComponent
>>>>>>> 1dcf0be1eed7f58418e975f72fcc63135e9e5e93
    BandComponent
>>>>>>> ef4ec7201b3fcd4e05981d231ed94519a7cac386
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
