import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import e from 'express';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Role } from '../../interface/employee-interface';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule, MatIconModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)]],
      salary: ['', [Validators.required, Validators.min(0)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      dateOfJoining: ['', [Validators.required]],
      departmentId: ['', [Validators.required, Validators.min(1)]],
      roleType: ['', [Validators.required]],
      addressList: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addAddress(); // Add one address by default
  }

  // Getter for addressList FormArray
  get addressList(): FormArray {
    return this.employeeForm.get('addressList') as FormArray;
  }

  // Create a new address FormGroup
  createAddress(): FormGroup {
    return this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      country: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  // Add a new address to addressList
  addAddress(): void {
    this.addressList.push(this.createAddress());
  }

  // Remove an address from addressList
  removeAddress(index: number): void {
    this.addressList.removeAt(index);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
      this.employeeService.addEmployee(employeeData).subscribe(
        (response) => {
          console.log('Employee added successfully', response);
          this.employeeForm.reset();
          this.addressList.clear();
          this.addAddress(); // Reset with one address
        },
        (error) => {
          console.error('Error adding employee', error);
        }
      );
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}