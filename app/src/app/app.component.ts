import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items=["ivan", "gosho", "asen"];
  getData(data:string){
    console.log(data);
    
    
  }
}
