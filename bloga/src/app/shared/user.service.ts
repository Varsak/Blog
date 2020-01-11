import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'
import {Observable} from 'rxjs';
import { User } from './user.model';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';
import { UserInfo } from '../models/userinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly rootUrl = 'https://localhost:44380/';
data :any;

private _headers: HttpHeaders = new HttpHeaders({ 'Authorization': 'Bearer EMcs_9wJk7No-PmHyDmDyJBnnNqWJglLcNER' });

constructor(private http: HttpClient) { }
  
  registerUser(user : User)
  {
    const body = 
    {
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword,
    }
    var reqHeader =new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/Account/Register', body, {headers:reqHeader});
  }


  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
    
  }

  getUserClaims(){
  return this.http.get(this.rootUrl+'api/Account/UserInfo');
  }

  getAllUsersInfo(): Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(this.rootUrl+'api/Account/AllUsersInfo');
    }


  getAllRoles() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/GetAllRoles', { headers: reqHeader });
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;

  }

  deleteUser(userEmail : string ){
    var reqHeader = new HttpHeaders( "Access-Control-Allow-Methods: GET, POST, PUT, DELETE" );
    // const body = 
    // {
    //   Email:userEmail
    // }
    //Access-Control-Allow-Methods: GET, POST, PUT;
    return this.http.delete(this.rootUrl + '/api/Account/Delete/' +userEmail, { headers: reqHeader });
  }

}
