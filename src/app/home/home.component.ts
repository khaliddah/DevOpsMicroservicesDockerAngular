import { Component, OnInit } from '@angular/core';
import {BlogService} from '../controller/service/blog.service';
import {Observable} from 'rxjs';
import {Blog} from '../controller/model/blog.model';
import {LoginService} from "../controller/service/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private  blogService: BlogService, private loginservice: LoginService) {
    }
  posts: Observable<Array<Blog>>;

  pageActual: number = 1;
  ngOnInit(): void {
    this.posts = this.blogService.getAllPosts();
    }
}

