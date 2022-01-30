import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './app.add-post-modal.html',
  styleUrls: ['./app.add-post-modal.css']
})
export class AppAddPost {
  @Input() isShow:boolean | undefined;
  @Input() hide: ((args: any) => void) | any;
  constructor(private http: HttpClient, private router: Router) { }
  add(title: string, description: string, type: string, category : string){
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;
    const company = JSON.parse(data).username

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'title' : title, 'description' : description, 'type' : type, 'category' : category, 'likes' : [], 'company' : JSON.parse(data).username}
    this.http.post<any>(`https://parseapi.back4app.com/classes/Post`, body, { headers : headers }).subscribe(newData => {
      console.log(newData);
      this.hide();
    });
  }
}
