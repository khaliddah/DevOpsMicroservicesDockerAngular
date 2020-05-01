import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Login} from '../controller/model/login.model';
import {LoginService} from '../controller/service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loginPayload: Login;
  constructor( private loginService: LoginService , private router: Router , private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }
  ngOnInit(): void {
  }

  onsubmit() {
    console.log('kskl');
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    this.loginService.savelogin(this.loginPayload).subscribe(data => {
      console.log('jjkkl');
      if (data) {
        console.log('fff');
        this.router.navigateByUrl('/Write') ;
        console.log('login success');
      } else {
        console.log('Login failed');
      }
    });
  }

}
