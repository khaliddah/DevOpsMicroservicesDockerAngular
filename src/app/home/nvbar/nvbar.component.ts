import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../controller/model/blog.model";
import {BlogService} from "../../controller/service/blog.service";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../controller/service/login.service";

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
 posts: Observable<Array<Blog>>;

  constructor(private router: ActivatedRoute, private blogService: BlogService, public loginService: LoginService) { }
  post: Blog;
  // tslint:disable-next-line:ban-types
  permaLink: Number;
  ngOnInit(): void {
  }
}
