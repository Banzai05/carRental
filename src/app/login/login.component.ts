import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  Router: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logInUser() {
    if (this.username === "admin" && this.password === "123") {
      localStorage.setItem("user", this.username);
      this.router.navigate(['home']);
    } else {
      alert("username or password is wrong");
    }
  }

  saveLocalStorage() {

  }

}
