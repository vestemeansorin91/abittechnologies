import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  userForm: FormGroup;

  genders: string[] = Object.values(Gender);
  selectedGender: Gender = Gender.MALE;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    public dialogRef: MatDialogRef<AddUserComponent>
  ) {
    this.buildForm();
  }

  onSexSelected(gender: Gender) {
    this.selectedGender = gender;
    this.userForm.get('sex').patchValue(gender);
  }

  public onCreateUser() {
    this.usersService.createUser(this.userForm.value);
    this.onCloseModal();
  }

  public onCloseModal() {
    this.userForm.reset();
    this.dialogRef.close();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      sex: this.fb.control(this.selectedGender, Validators.required),
    });
  }
}
