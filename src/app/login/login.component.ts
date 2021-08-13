import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any = "linus";
  password: any = "1234";




  loginForm = this.fb.group({

    username: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],



  })
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    if (this.username == username && this.password == password) {
      alert("Login Successfull")
      this.router.navigateByUrl("librerytable")
    }
    else {
      alert("Invalid")
    }
  }

}
