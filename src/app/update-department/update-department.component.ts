import { Component, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { RouterLink, ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-department',
  imports: [MatIconModule, RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.css'
})
export class UpdateDepartmentComponent implements OnInit {

  departmentId! : number;
  departmentName: string = '';
  departmentCode: string = '';
  message = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));

    this.departmentService.getDepartmentById(this.departmentId).subscribe({
      next: (data) => {
        this.departmentName = data.name;
        this.departmentCode = data.code;
      },
      error: () => {
        this.error = 'Failed to load department data.';
      }
    });
  }

  updateDepartment(): void {
    const updatedDepartment = {
      name: this.departmentName,
      code: this.departmentCode
    };

    this.departmentService.updateDepartment(this.departmentId, updatedDepartment).subscribe({ 

        next: () => {
              this.message = "Department updated successfully!";
              this.departmentName = '';
              this.departmentCode = '';
              this.error = '';
            },
            
            error: () => {
              this.error = 'Update failed. Please try again.';
              this.message = '';
            }
      }
        );
  }
}
