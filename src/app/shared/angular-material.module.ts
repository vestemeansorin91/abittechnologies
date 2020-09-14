import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

const MODULES = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class AngularMaterialModule {}
