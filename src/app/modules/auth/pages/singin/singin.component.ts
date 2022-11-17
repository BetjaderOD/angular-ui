import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../types/user";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html'
})
export class SinginComponent implements OnInit {
  user:UserLogin = {
    email: '',
    password: '',
  }
  get isLoading(){
    return this.authService.isLoading
  }

  constructor(private authService: AuthService, private router: Router) {
    if (!!localStorage.getItem('token'))
      this.router.navigateByUrl('/')
  }

  ngOnInit(): void {
  }
  singin(){
    this.authService.login(this.user)
    console.log(this.user);
  }

}
