import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthService} from "../service/hardcoded-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = 'keles'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor(private router: Router,
              public hardcodedAuthService: HardcodedAuthService) {

  }

  ngOnInit(): void {
  }

  handleLogin() {
    // if (this.username === 'keles' && this.password === 'keles') {
    if (this.hardcodedAuthService.auth(this.username,this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
