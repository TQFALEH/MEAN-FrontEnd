import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserModel } from '../interfaces/auth-model.interface'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }


  register(name: string, email: string, password: string) {

    const authModel: UserModel = { name: name, email: email, password: password }
    return this.http.post('http://localhost:8000/auth/signup', authModel, {
      withCredentials: true
    })
  }

  login(email: string, password: string) {
    const authModel: UserModel = { email: email, password: password }
    return this.http.post('http://localhost:8000/auth/login', authModel, {
      withCredentials: true
    })
  }


  checkUser() {

    return this.http.get('http://localhost:8000/auth/user', {
      withCredentials: true
    })
  }




  logout() {
    return this.http.post('http://localhost:8000/auth/logout', '', { withCredentials: true }).subscribe(res => {
      console.log(res);
    }, (e) => {
      console.log(e);
    })
  }
}



