import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {config} from 'rxjs';
import {Register} from '../controller/model/register.model';
import {RegisterService} from '../controller/service/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerForm: FormGroup;
    registerpaylod: Register;
    constructor( private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
       confirmPassword: new FormControl()
    });
    this.registerForm = this.formBuilder.group({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    this.registerpaylod = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    }


  ngOnInit(): void {
  }

  onsubmit() {
      console.log('ndk');
      this.registerpaylod.username = this.registerForm.get('username').value;
      this.registerpaylod.email = this.registerForm.get('email').value;
      this.registerpaylod.password = this.registerForm.get('password').value;
      this.registerpaylod.confirmPassword = this.registerForm.get('confirmPassword').value;
      console.log('hi driss');
      return this.registerService.save(this.registerpaylod).subscribe(data => {
        console.log('sucsses');
        this.router.navigateByUrl('/registerSuccess');
   } , error => {
     console.log('error');
   });
  }
}
