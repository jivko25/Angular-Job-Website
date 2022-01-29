import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './app.settings-modal.html',
  styleUrls: ['./app.settings-modal.css']
})
export class AppSettings {
  @Input() isShow:boolean | undefined;
  @Input() hide: ((args: any) => void) | any;
  constructor(private http: HttpClient, private router: Router) { }
  changeName(username: string){
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;
    const userId = JSON.parse(data).objectId;

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'username' : username}
    this.http.put<any>(`https://parseapi.back4app.com/users/${userId}`, body, { headers : headers }).subscribe(newData => {
      this.hide();
    });
  }
  changeEmail(email: string){
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;
    const userId = JSON.parse(data).objectId;

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'email' : email}
    this.http.put<any>(`https://parseapi.back4app.com/users/${userId}`, body, { headers : headers }).subscribe(newData => {
      this.hide();
    });

  }
  changePassword(){
    const data = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const token = JSON.parse(data).sessionToken;
    const email = JSON.parse(data).email;
    console.log(email);
    

    const headers = { 
      'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 
      'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 
      'X-Parse-Revocable-Session' : '1', 
      'Content-Type' : 'application/json',
      'X-Parse-Session-Token' : token };
    const body = {'email' : email};
    this.http.post<any>(`https://parseapi.back4app.com/requestPasswordReset`, body, { headers : headers }).subscribe(newData => {
      this.hide();
    });
  }
}
