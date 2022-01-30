import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserRegister } from './user-register/app.user-register';
import { AppHome } from './home/app.home';
import { AppUserLogin } from './user-login/app.user-login';
import { AppCompanyLogin } from './company-login/app.company-login';
import { AppCompanyRegister } from './company-register/app.company-register';

const routes: Routes = [
  {path: '', component: AppHome},
  {path: 'user-register', component: AppUserRegister},
  {path: 'user-login', component: AppUserLogin},
  {path: 'company-register', component: AppCompanyRegister},
  {path: 'company-login', component: AppCompanyLogin},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppUserRegister, AppHome, AppUserLogin, AppCompanyLogin, AppCompanyRegister]
