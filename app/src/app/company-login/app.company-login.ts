import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-login',
  templateUrl: './app.company-login.html',
  styleUrls: ['./app.company-login.css']
})
export class AppCompanyLogin {
  constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string){
    const headers = { 'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 'X-Parse-Revocable-Session' : '1', 'Content-Type' : 'application/json' };
    const body = {'username' : username, 'password' : password}
    this.http.post<any>('https://parseapi.back4app.com/login', body, { headers : headers }).subscribe(data => {
      data.username = username;

      localStorage.setItem('user', JSON.stringify(data))
      this.router.navigate(['home'])
    });
  }
}
