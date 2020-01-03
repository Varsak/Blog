import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly rootUrl = 'https://localhost:44380/';
  constructor(private http: HttpClient) { }
  
  registerUser(user : User)
  {
    const body: User = 
    {
      //UserName: user.UserName,
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword
    }
    var reqHeader =new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/Account/Register', body, {headers:reqHeader});
    //https://localhost:44380//api/Account/Register
  }


  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
  return this.http.get(this.rootUrl+'api/Article');
  // ,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
  }

}
