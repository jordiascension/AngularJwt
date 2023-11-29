import { IAuthInfo } from './../IAuthInfo';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string = 'john@mail.com';
  public password: string ='changeme';
  public iAuthInfo!: IAuthInfo;

  constructor(private authService: AuthService, private router: Router) {

  }

  public login() {
    console.log(this.email);
    console.log(this.password);
    this.authService.Login(this.email,this.password).subscribe({
      next: (iAuthInfo) => {
          console.log ("User logged: " + JSON.stringify(iAuthInfo));
          this.iAuthInfo = iAuthInfo;
          
      },
    });
  }
}
