import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name;
  email;
  password;
  address;
  city;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  
  addData() {
    if(this.email!=null)
    {
      alert('email must contain special character Like (!,@,#,$,%,^,&,*)');
  }
    if(this.password.length<10)
    {
      alert('password  must be atleast 10 characters long');
  }
  else
{
  this.us.addData(this.name,this.email,this.password,this.address,this.city);
alert('Registeration complete, welcome '+[this.name]);
}
console.log(this.password.length)
    // console.log(this.name) 
}

}
