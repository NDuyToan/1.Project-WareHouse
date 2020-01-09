import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Login } from './../login/login.model';

const KEY_TOKEN = "token"

@Injectable({ providedIn: 'root' })
 export class AuthServerProvider {
   private urlLogin: string = 'http://localhost:9000/api/authenticate';
  constructor(
    private http: HttpClient,
  ) {}

  login( data: Login): Observable<any> {
    return this.http.post(this.urlLogin, data )
  }
  logout() {
    return localStorage.removeItem(KEY_TOKEN);
  }

  setLocal(token: string){
    localStorage.setItem(KEY_TOKEN, token);
    if (localStorage.hasOwnProperty(KEY_TOKEN)){
      return true;
    } else {
      return false;
    }
  }

  getLocal(): any {
    if (localStorage.hasOwnProperty(KEY_TOKEN)) {
    return localStorage.getItem(KEY_TOKEN);
  } else {
    return false;
  }

 }
}

