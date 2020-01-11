import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '../models/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  userClaims: any;

  constructor(private router: Router, private userService: UserService, private articleService: ArticleService) { }
  articles: Article[]; 
  article: Article; 
  artId: number;
  
  ngOnInit() {
    
  }

  getArts(): Observable <Article[]>  {
    return this.articleService.getAllArticles();
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  clicked() 
  { 
    this.articleService.getAllArticles().subscribe((data: Article[]) => { this.articles = data; })
  }

   navigateToArt(id: number) {
     this.router.navigate(['/art',id]);
  }

  getArticle(id: number) {
    this.articleService.getArticle(id).subscribe((data: Article) => { this.article = data; })
  }
  clickedAddNewPost(){
    this.router.navigate(['/newarticle']);
    
  }
}
