import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-header [user]=user></app-header>`,
  styleUrls: ['./app.home.css']
})
export class AppHome {
  user = localStorage.getItem('user') !== null;
  
}
