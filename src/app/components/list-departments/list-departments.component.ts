import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

import { DepartmentService } from '../../service/department.service';
import { DepartmentSharedService } from '../../service/department-shared.service';
import { Department } from '../../interface/department-interface';

@Component({
  selector: 'app-list-departments',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatTooltipModule, 
    RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './list-departments.component.html',
  styleUrl: './list-departments.component.css'
})
export class ListDepartmentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code', 'actions'];
  dataSource = new MatTableDataSource<any>();
  pageSize = 4;
  pageNumber = 0;
  totalElements = 0;

  departments: any[] = [];


  searchText: string = '';



  constructor(
    private http: HttpClient, 
    private departmentService: DepartmentService,
    private router: Router, 
  private departmentSharedService: DepartmentSharedService) {}

  ngOnInit() {
    this.getAllDepartments(this.pageNumber, this.pageSize);
  }

  getAllDepartments(pageNum: number, pageSize: number) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:password')
    });
  
    this.http
      .get<any>(
        `http://localhost:8080/api/departments?pageNum=${pageNum}&pageSize=${pageSize}`,
        { headers }
      )
      .subscribe({
        next: (response) => {
          this.dataSource.data = response.data.data;
          this.totalElements = response.data.totalElements;
          this.pageNumber = response.data.pageNumber;
          this.pageSize = response.data.pageSize;
        },
        error: (err) => {
          console.error('API error', err);
        }
      });
  }

  onPageChange(event: PageEvent) {
    this.getAllDepartments(event.pageIndex, event.pageSize);
  }

    deleteDepartment(id: number): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        this.getAllDepartments(this.pageNumber, this.pageSize); // refresh list after deletion
      });
    }
  }

}
