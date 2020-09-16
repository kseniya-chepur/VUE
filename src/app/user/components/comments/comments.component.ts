import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-services';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  commentList:any[] = [];

  constructor(private userService: UserService) {
    this.userService.getUserComments()
      .subscribe(value => this.commentList = value);     
  }
}
