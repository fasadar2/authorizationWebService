import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {PasswordComponent} from "./password/password.component";



export const routes: Routes = [
  {path:"main",component: AppComponent},
  {path:"login",component:LoginComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path:"password",component:PasswordComponent},
];
