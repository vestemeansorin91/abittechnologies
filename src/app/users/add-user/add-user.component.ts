import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/shared/entities/gender';
import { User } from 'src/app/shared/entities/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'bit-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @Output() userCreated: EventEmitter<User> = new EventEmitter<User>(null);
  gender: typeof Gender = Gender;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.buildForm();
  }

  public onCreateUser() {
    // TODO: i will save it to localStorage
    // this.usersService.createUser();
    this.userCreated.emit(this.userForm.value);
    this.userForm.reset();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      sex: this.fb.control('', Validators.required),
    });
  }
}
