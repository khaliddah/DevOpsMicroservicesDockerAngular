import { Component, OnInit } from '@angular/core';
import {BlogService} from '../controller/service/blog.service';
import {Observable} from 'rxjs';
import {Blog} from '../controller/model/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private  blogService: BlogService) {
    }
  posts: Observable<Array<Blog>>;

  pageActual: number = 1;
  ngOnInit(): void {
    this.posts = this.blogService.getAllPosts();
    }
}

