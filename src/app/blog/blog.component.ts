import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Blog} from '../controller/model/blog.model';
import {BlogService} from '../controller/service/blog.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {Register} from "../controller/model/register.model";
import {RegisterComponent} from "../register/register.component";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  addPostForm: FormGroup;
  PostPayload: Blog;
  register: Register;
  registers: RegisterComponent;
  title = new FormControl('');
  body = new FormControl('');
  categorie = new FormControl('');
  constructor(private blogService: BlogService, private router: Router) {
    this.addPostForm = new FormGroup({
    title: this.title,
    body: this.body,
      categorie: this.categorie,
  });
    // @ts-ignore
    this.PostPayload = {
      id: '',
      body: '',
      categorie: '',
      title: '',
      username: '',
    };
  }

  ngOnInit(): void {
  }

  addPost() {
    this.PostPayload.title = this.addPostForm.get('title').value;
    this.PostPayload.body = this.addPostForm.get('body').value;
    this.PostPayload.date = new Date();
    this.PostPayload.categorie = this.addPostForm.get('categorie').value;
    // tslint:disable-next-line:no-unused-expression
    this.blogService.addPost(this.PostPayload).subscribe(data => {
      console.log('le post est bien ajouter');
    }, error => {
      console.log('Failure Response');
    });
  }
}
