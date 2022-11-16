import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../types/user";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html'
})
export class SinginComponent implements OnInit {
  user:UserLogin = {
    email: '',
    password: '',
  }
  constructor() { }

  ngOnInit(): void {
  }
  singin(){
    console.log(this.user);
  }

}
