import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(false);
  
  constructor(private http: Http) { }
  

  createUser(email: string, password: string): Observable<any>{
    return this.http.post('/api/users', {email, password})
      .map(res => {
        let token = res.headers.get("x-auth");
        localStorage.setItem('headers', JSON.stringify(token));
        return res.json();
      })
      .map(user => {
         if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.next(this.getUser());
        }
        return !!user;
      });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post('/api/users/login', {email, password})
      .map(res => {
        let token = res.headers.get("x-auth");
        localStorage.setItem('headers', JSON.stringify(token));
        return res.json();
        })
      .map(user => {
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.next(this.getUser());
        }
        return !!user;
      });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('headers');
    this.currentUser.next(false);
  }

  getUser() {
    var user = localStorage.getItem('user');
    return user? JSON.parse(user) : false;
  }

  getHeaders() {
    let headers = localStorage.getItem('headers');
    return headers? JSON.parse(headers) : false;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

}