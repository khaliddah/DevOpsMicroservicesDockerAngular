import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
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
// tslint:disable-next-line:variable-name
  private _loginPayload: Login;

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this._loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  onsubmit() {
    this._loginPayload.username = this.loginForm.get('username').value;
    this._loginPayload.password = this.loginForm.get('password').value;
    this.loginService.savelogin(this._loginPayload).subscribe(data => {
      console.log('jjkkl');
      if (data) {
        console.log('fff');
        console.log('login success');
        this.router.navigateByUrl('/');
        alert('Welcom to Blogger');
      } else {
        console.log('Login failed');
        alert('Entrer les information correctement');
      }
    });
  }

}
