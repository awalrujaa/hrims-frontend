import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { provideHttpClient } from '@angular/common/http';

import { DepartmentService } from '../department.service';
import { Department } from '../department.model';

@Component({
  selector: 'app-list-departments',
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './list-departments.component.html',
  styleUrl: './list-departments.component.css'
})
export class ListDepartmentsComponent implements OnInit {

  departments: Department[] = [];
  displayedColumns: string[] = ['id', 'name', 'code', 'actions'];
  errorMessage!: string;

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: (err) => console.error('Failed to load departments', err)
    });
  }

}
