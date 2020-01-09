import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ArticleService } from 'src/app/models/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css']
})
export class NewarticleComponent implements OnInit {
PostName: string; PostText :string;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private userService: UserService, 
    private articleService : ArticleService,private toastr : ToastrService){}

  ngOnInit() {
  }
  
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  OnSubmit(PostName, PostText) {
    this.articleService.addNewPost(PostName, PostText).subscribe((data: any) => {
      this.toastr.success('New post added successful');
      this.router.navigate(['/home']);
    });
  }

}
