import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isLoginError : boolean =false;
  roles : string;

  constructor(private userService: UserService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form? : NgForm)
  {
    if(form !=null)
    form.reset();
    this.user={
      Password:'',
      ConfirmPassword:'',
      Email:''
    }
  }

  OnSubmit(form: NgForm) 
  {
    var x = this.roles;
    this.userService.registerUser(form.value).subscribe((data: any) =>
    {
          this.resetForm(form);
          this.toastr.success('User registration successful');
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError=true;
    }
    );
  }

  clicked(event) { 
    this.resetForm();
    this.isLoginError=false;
 } 

 updateSelectedRoles(index) {
  //this.roles[index].selected = !this.roles[index].selected;
}

}
