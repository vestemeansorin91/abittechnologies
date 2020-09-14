import { Injectable } from '@angular/core';
import { User } from '../shared/entities/user';

@Injectable()
export class UsersService {
  users: User[] = [];

  constructor() {
    this.users = this.getUsers();
  }

  getUsers() {
    return localStorage.getItem('bit-users')
      ? JSON.parse(localStorage.getItem('bit-users'))
      : [];
  }

  createUser(user: User) {
    this.users.push(user);
    localStorage.setItem('bit-users', JSON.stringify(this.users));
  }
}
