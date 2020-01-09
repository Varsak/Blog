import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
userClaims: any;
UN : string ="a696af8e-ac6d-4db2-8f50-7f35992172d0";
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {this.userClaims = data;});
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  
  OnSubmit(UserName) {
    this.userService.getUserClaims().subscribe((data: any) => {this.userClaims = data;});
  }
  
}
