import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {config} from 'rxjs';
import {Register} from '../controller/model/register.model';
import {RegisterService} from '../controller/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
 registerpaylod: Register;
  constructor( private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.formBuilder.group( {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  ngOnInit(): void {
  }

  onsubmit() {
   this.registerpaylod.username = this.registerForm.get('username').value;
   this.registerpaylod.email = this.registerForm.get('email').value;
   this.registerpaylod.password = this.registerForm.get('password').value;
   this.registerpaylod.confirmPassword = this.registerForm.get('confirmPassword').value;

   return this.registerService.save(this.registerpaylod).subscribe(data =>{
     console.log('sucsses');
   } , error => {
     console.log('error');
   });
  }
}
