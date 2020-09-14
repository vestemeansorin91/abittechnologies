import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'bit-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  constructor(public usersService: UsersService) {}

  get users() {
    return this.usersService.users;
  }
}
