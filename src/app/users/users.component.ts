import { Component } from '@angular/core';
import { User } from '../shared/entities/user';

@Component({
  selector: 'bit-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  users: User[] = [];

  public newUserCreated(newUser: User) {
    this.users.push(newUser);
  }
}
