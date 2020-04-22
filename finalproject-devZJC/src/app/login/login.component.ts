import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Observable } from 'rxjs';
import { User } from '../models/User'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService: LoginServiceService;
  td: any;
  ur: User;
  userName: String;

  router:Router;
  constructor(loginService: LoginServiceService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit(): void {
    this.ur = null;
  }

  checkUser(user) {

    let newUser$: Observable<User> = this.loginService.getUser(user.value);

    newUser$.subscribe(user => {
      this.ur = user;
      if (this.ur === null) {

        //user doesn't exist
        document.getElementById("noAccount").style.display = "block";
        document.getElementById("user").style.borderColor = "red";
        document.getElementById("user").style.borderWidth = "medium";

      } else {

        //if find the username,
        document.getElementById("wrongPass").style.display = "none";
        document.getElementById("noAccount").style.display = "none";
        document.getElementById("user").style.borderColor = "#DADCE0";
        document.getElementById("user").style.borderWidth = "thin";

        //change page
        document.getElementById("userName").style.display = "none";
        document.getElementById("password").style.display = "block";
        document.getElementById("ua").innerHTML = "Hi " + user.nickName;
        document.getElementById("account").innerHTML = user.userName;
      }
    });

  }

  checkPassword(password) {
    let newUser$: Observable<User> = this.loginService.getUser(document.getElementById("account").innerHTML);

    newUser$.subscribe(user => {
      this.ur = user;
      if (this.ur.password != password.value) {
        //user doesn't exist
        document.getElementById("wrongPass").style.display = "block";
      } else {
        document.getElementById("wrongPass").style.display = "none";
        this.router.navigate(['UI'],{ queryParams: { username: user.userName } });
      }
    })

  }

  back() {
    document.getElementById("userName").style.display = "block";
    document.getElementById("password").style.display = "none";
    document.getElementById("wrongPass").style.display = "none";
    document.getElementById("noAccount").style.display = "none";
  }

  toSignUp(){
  }

}
