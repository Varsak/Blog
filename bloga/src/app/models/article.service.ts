import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'
import {Observable} from 'rxjs';
//import { User } from './user.model';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
// export class ArticleService {

//   constructor() { }
// }


export class ArticleService {
readonly rootUrl = 'https://localhost:44380/';
data :any;
curDate=new Date();
//private _headers: HttpHeaders = new HttpHeaders({ 'Authorization': 'Bearer EMcs_9wJk7No-PmHyDmDyJBnnNqWJglLcNER' });

constructor(private http: HttpClient) { }
  
   getAllArticles(): Observable<Article[]> {
      return this.http.get<Article[]>(this.rootUrl + 'api/article')
  }



  getArticle(id : number): Observable<Article> {
    return this.http.get<Article>(this.rootUrl + 'api/article/'+id)
  }

  getArticleComments(id : number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.rootUrl + 'api/comment/'+id)
  }

  addNewComment2(commentText, articleId: number)
  {
    const body = 
    {
      CommentText: commentText,
      Date: this.curDate,
      ArticleId: articleId,
      UserId: JSON.parse(localStorage.getItem('curUserId'))
    }
    var reqHeader =new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/comment', body, {headers:reqHeader});
    
  }
  
  addNewPost(postName, postText){
    const body = 
    {
      PostName: postName,
      PostText: postText,
      Date: this.curDate,
      UserId: JSON.parse(localStorage.getItem('curUserId'))
    }
    var reqHeader =new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/article', body, {headers:reqHeader});
  }


}





//curDate=new Date();

  // getAllRoles() {
  //   var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  //   return this.http.get(this.rootUrl + '/api/GetAllRoles', { headers: reqHeader });
  // }

  // // roleMatch(allowedRoles): boolean {
  // //   var isMatch = false;
  // //   var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
  // //   allowedRoles.forEach(element => {
  // //     if (userRoles.indexOf(element) > -1) {
  // //       isMatch = true;
  // //       return false;
  // //     }
  // //   });
  // //   return isMatch;

  // }