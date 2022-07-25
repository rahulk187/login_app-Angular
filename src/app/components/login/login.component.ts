import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  credentials = {
    username: '',
    password: ''
  }

  onSubmit() {
    console.log("submit");
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      this.loginService.generateToken(this.credentials).subscribe(
        (res:any) => {
          console.log(res.token)
          this.loginService.loginUser(res.token)
          window.location.href = '/dashboard'
        },
        err => {
          console.log(err)
        }
      )
    } else {
      console.log("Fields are empty!");
    }
  }


}
