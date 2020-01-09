import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'
import {Observable} from 'rxjs';
import { User } from './user.model';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';

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
  // ,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
  }

  getAllArticles(): Observable<Article[]> {
      return this.http.get<Article[]>(this.rootUrl + 'api/article')
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
  getArticle(id : number): Observable<Article> {
    return this.http.get<Article>(this.rootUrl + 'api/article/'+id)
  }
  getArticleComments(id : number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.rootUrl + 'api/comment/'+id)
  }
}
