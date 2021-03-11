import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
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
    LoginComponent
=======
    BandComponent
>>>>>>> ef4ec7201b3fcd4e05981d231ed94519a7cac386
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
