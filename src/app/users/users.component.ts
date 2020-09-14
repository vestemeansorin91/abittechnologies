import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'bit-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(public dialog: MatDialog) {}

  public onAddUser() {
    this.dialog.open(AddUserComponent, {
      width: '400px',
    });
  }
}
