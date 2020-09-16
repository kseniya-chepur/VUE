import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user-model';
import {UserService} from '../../services/user-services';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  userList: User[] = [];
  
  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe(value => this.userList = value);    
  }
}
