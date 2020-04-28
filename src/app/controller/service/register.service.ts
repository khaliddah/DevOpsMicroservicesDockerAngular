import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../model/register.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = 'http//:localhost:8090/';
  constructor( private httpClient: HttpClient) { }
  // @ts-ignore
  save( registerpaylod: Register): Observable<any> {
    return this.httpClient.post(this.url + "signUp" , registerpaylod);
  }
}
