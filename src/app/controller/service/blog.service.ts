import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../model/blog.model';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

private url = 'http://192.168.0.107:8091/blog-api/';
  constructor(private httpClient: HttpClient) { }

  addPost(PostPayload: Blog) {
    return this.httpClient.post(this.url , PostPayload);
  }


  getAllPosts(): Observable<Array<Blog>> {
    return this.httpClient.get<Array<Blog>>(this.url);
  }

  // tslint:disable-next-line:ban-types
  getPost(permaLink: Number): Observable<Blog>{
    return this.httpClient.get<Blog>(this.url + 'id/' + permaLink);
  }
}
