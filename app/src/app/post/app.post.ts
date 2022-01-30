import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './app.post.html',
  styleUrls: ['./app.post.css']
})
export class AppPost {
  @Input() id: string | any
  @Input() company:string | any
  @Input() title:string | any
  @Input() description:string | any
  @Input() type:string | any
  @Input() category:string | any
  @Input() hired:string | any
  @Input() likes: Array<string> | any
  @Input() applications : Array<string> | any
  currentUser = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).username;
  isCompany = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).type == 'company';
  isLiked = false;
  isApplied = false;
  isHired = false;
  showApplications = false;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLiked = this.likes.includes(this.currentUser);
    this.isApplied = this.applications.includes(this.currentUser);
    this.isHired = this.hired.length > 0;
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
    });
  }
  like(){
      this.isLiked = true;
      const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
      const token = JSON.parse(data).sessionToken;
      const user = JSON.parse(data).username;
      this.likes.push(user);
  
      const headers = { 
        'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
        'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
        'X-Parse-Revocable-Session' : '1', 
        'Content-Type' : 'application/json',
        'X-Parse-Session-Token' : token };
      const body = {'likes' : this.likes}
      this.http.put<any>(`https://parseapi.back4app.com/classes/Post/${this.id}`, body, { headers : headers }).subscribe(newData => {
      
      });
  }
  apply(){
    this.isApplied = true;
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;
    const user = JSON.parse(data).username;
    const userId = JSON.parse(data).objectId;
    const apps = JSON.parse(data).applications
    this.applications.push(user);
    apps.push({
      'company' : this.company,
      'title' : this.title
    })

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'applications' : this.applications};
    const bodyUser = {'applications' : apps};
    this.http.put<any>(`https://parseapi.back4app.com/classes/Post/${this.id}`, body, { headers : headers }).subscribe(newData => {});
    this.http.put<any>(`https://parseapi.back4app.com/users/${userId}`, bodyUser, { headers : headers }).subscribe(newData => {});
  }

  showApps(){
    this.showApplications = true;
  }

  hideApps(){
    this.showApplications = false;
  }

  hire(user : string){
    this.isHired = true;
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'hired' : user}
    this.http.put<any>(`https://parseapi.back4app.com/classes/Post/${this.id}`, body, { headers : headers }).subscribe(newData => {
    });
    this.hideApps();
  }
}
