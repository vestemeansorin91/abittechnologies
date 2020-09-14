import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersComponent } from './users.component';
import { UsersRoutesModule } from './users.routes';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersComponent, ListUsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutesModule,
    SharedModule,
  ],
  providers: [UsersService],
  entryComponents: [AddUserComponent],
})
export class UsersModule {}
