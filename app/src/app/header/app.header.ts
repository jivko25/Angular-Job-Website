import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  constructor(private http: HttpClient) { }
  @Input() user:boolean | undefined;
  posts : any;
  applications = [];
  isShownSettings = false;
  isShownAddPost = false;
  isShownApplications = false;
  isCompany = false;
  ngOnInit(): void {
    this.getData()
    this.isCompany = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).type == 'company';
    this.applications = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).applications;
    console.log(this.applications);
    
  };
  getData(){
    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json'};
      const posts = this.http.get<any>(`https://parseapi.back4app.com/classes/Post`, { headers : headers }).subscribe(newData => {
        this.posts = newData.results;
      })}
  
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
    this.getData()
  }

  openApp(){
    this.isShownApplications = true;
  }
  hideApp(){
    this.isShownApplications = false;
  }
}
