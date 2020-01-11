import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
readonly rootUrl = 'https://localhost:44380/';
data :any;
curDate=new Date();

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
    return this.http.post(this.rootUrl + '/api/comment', body);
  }
  
  addNewPost(postName, postText){
    const body = 
    {
      PostName: postName,
      PostText: postText,
      Date: this.curDate,
      UserId: JSON.parse(localStorage.getItem('curUserId'))
    }
    return this.http.post(this.rootUrl + '/api/article', body);
  }
  deleteArticle(id : number){
    return this.http.delete(this.rootUrl + '/api/article/' + id);
  }

  deleteComment(id : number){
    return this.http.delete(this.rootUrl + '/api/comment/' + id);
  }

}





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