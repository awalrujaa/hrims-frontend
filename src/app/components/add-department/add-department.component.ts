import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../service/department.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-add-department',
  imports: [CommonModule, FormsModule, MatIconModule, RouterLink, MatCardModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
    router = inject(Router);
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
            this.router.navigate(['/admin/department']);
            alert("Department Created Successfully");
            this.message = response.status;
            this.departmentName = '';
            this.departmentCode = '';
            this.error = '';
        } else {
          this.error = 'Failed to create department.';
          this.message = '';
        }
      },
      (err) => {
        this.error = 'An error occurred. Please try again.';
        alert(`${this.error}`);

        this.message = '';
      }
    );
  }
}
