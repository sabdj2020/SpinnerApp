import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { RegisterComponent } from './register'
import { AuthGuard } from './guard/index'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'login', component: LoginComponent }, for when we create the login map
  { path: 'register', component: RegisterComponent},

  { path: '***', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
