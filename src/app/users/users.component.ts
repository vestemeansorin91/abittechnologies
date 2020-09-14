import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../shared/entities/user';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'bit-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [];

  constructor(public dialog: MatDialog) {}

  public onAddUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.users.push(result);
      }
    });
  }
}
