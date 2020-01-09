import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ArticleService } from '../models/article.service';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  article : Article; 
  comments : Comment[];
  private route: ActivatedRoute;
  artId : number;
  newComment : string;
ttt: string =localStorage.getItem('curUserId');
  constructor(private router: Router, private activateRoute: ActivatedRoute, private userService: UserService,
     private articleService : ArticleService, private toastr : ToastrService){
      this.artId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    
    this.articleService.getArticle(this.artId).subscribe((data: Article) => { this.article = data; })
  }

  clickedGetComments() 
  { 
    this.articleService.getArticleComments(this.artId).subscribe((data: Comment[]) => { this.comments = data; })
  }
  
  OnSubmit(newComment) {
    this.articleService.addNewComment2(newComment,this.artId).subscribe((data: any) => {
      this.toastr.success('New comment added successful');
      this.articleService.getArticleComments(this.artId).subscribe((data: Comment[]) => { this.comments = data; })
    });
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  resetForm(form? : NgForm)
  {
    //if(form !=null)
    form.reset();
    //this.newComment = '',
      
  }
}


