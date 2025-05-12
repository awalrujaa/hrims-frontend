import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-department-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule],
  templateUrl: './create-department-dialog.component.html',
  styleUrl: './create-department-dialog.component.css'
})
export class CreateDepartmentDialogComponent {
  departmentName = '';
  departmentCode = '';

  constructor(private dialogRef: MatDialogRef<CreateDepartmentDialogComponent>) {}

  onCreate() {
    if (this.departmentName.trim()) {
      this.dialogRef.close(this.departmentName);
    }
  }

}
