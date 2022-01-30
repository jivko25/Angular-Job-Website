import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './app.post.html',
  styleUrls: ['./app.post.css']
})
export class AppPost {
  @Input() company:string | any
  @Input() title:string | any
  @Input() description:string | any
  @Input() type:string | any
  @Input() category:string | any
  @Input() likes: Array<string> | any
  currentUser = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).username;
  isCompany = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).type == 'company';
  isLiked = false;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLiked = this.likes.includes(this.currentUser);
    console.log(this.isLiked);
    
  }
  add(title: string, description: string, type: string, category : string){
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;
    const userId = JSON.parse(data).objectId;

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'title' : title, 'description' : description, 'type' : type, 'category' : category, 'likes' : []}
    this.http.post<any>(`https://parseapi.back4app.com/classes/Post`, body, { headers : headers }).subscribe(newData => {
      console.log(newData);
      // this.hide();
    });
  }
}
