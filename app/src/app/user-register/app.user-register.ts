import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './app.user-register.html',
  styleUrls: ['./app.user-register.css']
})
export class AppUserRegister {
  getData(data:string){
    console.log(data);
    
    
  }
}
