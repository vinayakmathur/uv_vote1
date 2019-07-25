import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  email:String;
  password:String;
  constructor(private us:UsersService) { }
  
  ngOnInit() {
  }
  signin(){
    this.us.signIn(this.email,this.password);
  }

}

