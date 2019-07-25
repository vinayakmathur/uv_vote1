import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
  import { from } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 res:any;
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient,private router:Router) { }
  addData(name,email,password,address,city) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {name,email,password,address,city};
      this

          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email ,password,address,city, id) {
 
      const obj = {
          name: name,
          email:email,
          password: password,
          address:address,
          city: city
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    signin(email,password){
      const obj = {email, password};
      console.log(obj);
      this
        .http
        .post(`${this.url}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{

            this.router.navigateByUrl(`/home/${res._id}`);
          }
        });
}
getDataById(id){
  return this
    .http
    .get(`${this.url}/getbyid/${id}`);
}

register(name,address,city,password,email) {
// console.log(password);
// let length = password.lenght;
// console.log(length);
  const obj = {name,address,city,password,email};
  this
      .http
      .post(`${this.url}/addRegister`, obj)
      .subscribe(res => console.log(res));
}
}
