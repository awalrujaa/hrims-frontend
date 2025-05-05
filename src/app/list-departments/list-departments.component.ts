import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DepartmentService } from '../department.service';
import { Department } from '../department.model';

@Component({
  selector: 'app-list-departments',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive],
  templateUrl: './list-departments.component.html',
  styleUrl: './list-departments.component.css'
})
export class ListDepartmentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'code', 'actions'];
  dataSource = new MatTableDataSource<any>();
  pageSize = 4;
  pageNumber = 0;
  totalElements = 0;

  constructor(
    private http: HttpClient, 
    private departmentService: DepartmentService) {}

  // constructor(private departmentService: DepartmentService) {}

  // ngOnInit(): void {
  //   this.departmentService.getDepartments().subscribe({
  //     next: (data) => this.departments = data,
  //     error: (err) => console.error('Failed to load departments', err)
  //   });
  // }
  ngOnInit() {
    this.fetchDepartments(this.pageNumber, this.pageSize);
  }

  fetchDepartments(pageNum: number, pageSize: number) {
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
    this.fetchDepartments(event.pageIndex, event.pageSize);
  }

  deleteDepartment(id: number): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        this.fetchDepartments(this.pageNumber, this.pageSize); // refresh list after deletion
      });
    }
  }

  downloadCSV(): void {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:password'), // add auth if needed
    });
  
    this.http
      .get('http://localhost:8080/api/departments/download-csv', {
        headers,
        responseType: 'blob', // important for file download
      })
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'departments.csv';
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          console.error('Download failed:', err);
        },
      });
  }
  isDownloading = false;

  downloadExcel(): void {
    this.isDownloading = true;
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:password'),
    });
  
    this.http.get('http://localhost:8080/api/departments/download-excel', {
      headers,
      responseType: 'blob',
    }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'departments.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
        this.isDownloading = false;
      },
      error: (err) => {
        console.error('Download failed:', err);
        this.isDownloading = false;
      },
    });
  }
  
}
