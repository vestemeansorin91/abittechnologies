import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/entities/user';

@Component({
  selector: 'bit-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  @Input() users: User[];
}
