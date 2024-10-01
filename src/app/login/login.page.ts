import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showpassword: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
