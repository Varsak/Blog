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

}