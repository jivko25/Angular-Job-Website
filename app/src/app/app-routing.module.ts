import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserRegister } from './user-register/app.user-register';
import { AppHome } from './home/app.home';

const routes: Routes = [
  {path: 'user', component: AppUserRegister},
  {path: 'home', component: AppHome}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppUserRegister, AppHome]
