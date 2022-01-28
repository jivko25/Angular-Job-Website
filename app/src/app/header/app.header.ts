import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  @Input() user:boolean | undefined;
  logout(){
    localStorage.clear()
    this.user = false;
  }
}
