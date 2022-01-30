import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './app.company-register.html',
  styleUrls: ['./app.company-register.css']
})
export class AppCompanyRegister {
  constructor(private http: HttpClient, private router: Router) { }
  register(username: string, email: string, password: string){
    const headers = { 'X-Parse-Application-Id': '3cLdch7H4CJ4jp7boKabPSTEmmUmB2d7RqEx7a0x', 'X-Parse-REST-API-Key': 'UnO20LgpL4F0uS1Ahjpkuv7jxsol72xo3exjkP04', 'X-Parse-Revocable-Session' : '1', 'Content-Type' : 'application/json' };
    const body = {'username' : username, 'password' : password, 'email' : email, 'type' : 'company'}
    this.http.post<any>('https://parseapi.back4app.com/users', body, { headers : headers }).subscribe(data => {
      data.username = username;
      data.email = email;
      data.type = 'company'
      
      localStorage.setItem('user', JSON.stringify(data))
      this.router.navigate([''])
    });
  }
}
