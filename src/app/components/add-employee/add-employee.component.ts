import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import e from 'express';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Employee, Role } from '../../interface/employee-interface';
import { ReactiveFormsModule } from '@angular/forms';
import { Address } from '../../interface/employee-interface';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule, MatIconModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService)

  
  employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(0)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      dateOfJoining: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
      roleType: ['', [Validators.required]],
      addressList: this.fb.array([]),
    });

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
      console.log(this.employeeForm.value);
      const formValue = this.employeeForm.value;

      const formatDate = (date: any): string => {
  return new Date(date).toISOString().split('T')[0];
};

      const addressList: Address[] = (formValue.addressList ?? []).map((addr: any) => ({
        street: addr.street ?? '',
        city: addr.city ?? '',
        state: addr.state ?? '',
        zipcode: addr.zipcode ?? '',
        country: addr.country ?? '',
        type: addr.type ?? ''
      }));

      const dateOfBirth = formValue.dateOfBirth ? new Date(formValue.dateOfBirth).toISOString().split('T')[0] : '';
const dateOfJoining = formValue.dateOfJoining ? new Date(formValue.dateOfJoining).toISOString().split('T')[0] : '';

      const employeeData: Employee = {
      firstName: formValue.firstName ?? '',
      middleName: formValue.middleName ?? '',
      lastName: formValue.lastName ?? '',
      userName: formValue.userName ?? '',
      password: formValue.password ?? '',
      salary: Number(formValue.salary),
      mobileNumber: formValue.mobileNumber ?? '',
      email: formValue.email ?? '',
      bloodGroup: formValue.bloodGroup ?? '',
      dateOfBirth: dateOfBirth,
      dateOfJoining: dateOfJoining,
        departmentId: Number(formValue.departmentId),
      roleType: formValue.roleType ?? '',
      addressList: addressList,
    };
    
    console.log('Sending to backend:', JSON.stringify(employeeData));

    this.employeeService.addEmployee(employeeData).subscribe(
      (response) => {
        console.log('Employee added successfully', response);
        this.employeeForm.reset();
        this.addressList.clear();
        this.addAddress();
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