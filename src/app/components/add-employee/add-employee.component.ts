import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import e from 'express';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Role } from '../../interface/employee-interface';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule, MatIconModule, RouterLink, MatCardModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
router = inject(Router);
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    fullName: string = '';
    userName: string = '';
    password: string = '';
    role: Role | null = null;
    salary: number = 0;
    mobileNumber: string = '';
    email: string = '';
    dateOfBirth: number = 0;
    phone: number = 0;
    bloodGroup: string = '';
    dateOfJoining: number = 0;
    departmendId: number = 0;
    message: string = '';
    error: string = '';

  constructor(private employeeService: EmployeeService) {}

  // createEmployee() {
  //   const employee = {
  //     name: this.departmentName,
  //     code: this.departmentCode,
  //   };

  //   this.employeeService.createEmployee(employee).subscribe(
  //     (response) => {
  //       if (response.code === 200) {
  //           this.router.navigate(['/admin/department']);
  //           alert("Department Created Successfully");
  //           this.message = response.status;
  //           this.departmentName = '';
  //           this.departmentCode = '';
  //           this.error = '';
  //       } else {
  //         this.error = 'Failed to create department.';
  //         this.message = '';
  //       }
  //     },
  //     (err) => {
  //       this.error = 'An error occurred. Please try again.';
  //       alert(`${this.error}`);

  //       this.message = '';
  //     }
  //   );
  // }
}