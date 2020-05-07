import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../controller/model/blog.model";
import {BlogService} from "../../controller/service/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
 posts: Observable<Array<Blog>>;

  constructor(private router: ActivatedRoute, private blogService: BlogService) { }
  post: Blog;
  // tslint:disable-next-line:ban-types
  permaLink: Number;
;  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.blogService.getPost(this.permaLink).subscribe((data: Blog) => {
      this.post = data;
    }, (err: any) => {
      console.log('Failure Response');
    });
    this.posts = this.blogService.getAllPosts();
  }

  search() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.blogService.getPost(this.permaLink).subscribe((data: Blog) => {
      this.post = data;
    });
  }
}
