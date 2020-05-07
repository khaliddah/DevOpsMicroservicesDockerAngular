import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Login} from '../model/login.model';
import {JwtAutResponse} from '../model/jwt-aut-response';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8090/api/auth';
  constructor(private http: HttpClient,  private localStoraqeService: LocalStorageService) { }
  savelogin( loginPayload: Login): Observable<boolean> {
    return this.http.post<JwtAutResponse>(this.url + '/login', loginPayload).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data.authenticationToken);
      this.localStoraqeService.store('username', data.username);
      return true;
    }));
  }
}
