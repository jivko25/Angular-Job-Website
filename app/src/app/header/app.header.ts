import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  @Input() user:boolean | undefined;
  isShownSettings = false;
  isShownAddPost = false;
  logout(){
    localStorage.clear()
    this.user = false;
  }
  openSettings(){
    this.isShownSettings = true;
  }
  hideSettings = () : void => {
    this.isShownSettings = false;
  }
  openAdd(){
    this.isShownAddPost = true;
  }
  hideAdd = () : void => {
    this.isShownAddPost = false;
  }
}
