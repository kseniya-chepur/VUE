import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-services';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  postList:any[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsersPosts()
      .subscribe(value => this.postList = value);    
  }

 
}
