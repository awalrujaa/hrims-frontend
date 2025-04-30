import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-department',
  imports: [CommonModule, FormsModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  departmentName: string = '';
  departmentCode: string = '';
  message: string = '';
  error: string = '';

  constructor(private departmentService: DepartmentService) {}

  createDepartment() {
    const department = {
      name: this.departmentName,
      code: this.departmentCode,
    };

    this.departmentService.createDepartment(department).subscribe(
      (response) => {
        if (response.code === 200) {
          this.message = response.status;
          this.error = '';
        } else {
          this.error = 'Failed to create department.';
          this.message = '';
        }
      },
      (err) => {
        this.error = 'An error occurred. Please try again.';
        this.message = '';
      }
    );
  }
}
