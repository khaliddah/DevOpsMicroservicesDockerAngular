import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Login} from '../model/login.model';
import {JwtAutResponse} from '../model/jwt-aut-response';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable, pipe} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = 'http://localhost:8090/api/auth';
  private loginservice: LoginService;
  constructor(private http: HttpClient,  private localStoraqeService: LocalStorageService, private router: Router) { }
  savelogin( loginPayload: Login): Observable<boolean> {
    console.log("qdsfkjqmlsdkfj");
    return this.http.post<JwtAutResponse>(this.url + '/login', loginPayload).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data.authenticationToken);
      this.localStoraqeService.store('username', data.username);
      return true;
    }))
    
     }
  isAuthenticated(): boolean {
    return this.localStoraqeService.retrieve('username') != null;
  }

  logout() {
    this.localStoraqeService.clear('authenticationToken');
    this.localStoraqeService.clear('username');
  }

  get loginPayload(): Login {
    return this.loginservice.loginPayload;
  }

  set loginPayload(value: Login) {
    this.loginservice.loginPayload = value;
  }

  userLogin(loginpaylod: Login) {
    if(loginpaylod.username.valueOf() === 'admin@gmail.com' && loginpaylod.password.valueOf() === 'admin')
    {
      localStorage.setItem('email', loginpaylod.username.valueOf());
      alert("welcom admin");
      console.log("adminrentre");
      this.router.navigateByUrl('/add-post');
    } }
}
