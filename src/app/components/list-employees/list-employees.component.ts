import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { DepartmentService } from '../../service/department.service';
import { DepartmentSharedService } from '../../service/department-shared.service';

@Component({
  selector: 'app-list-employees',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatTooltipModule, FormsModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit {

  displayedColumns: string[] = ['num', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<any>();
  pageSize = 4;
  pageNumber = 0;
  totalElements = 0;

  employees: any[] = [];


  searchText: string = '';



  constructor(
    private http: HttpClient, 
    private departmentService: DepartmentService,
    private router: Router, 
    private departmentSharedService: DepartmentSharedService) {}

  ngOnInit() {
    this.getAllEmployees(this.pageNumber, this.pageSize);
  }

  getAllEmployees(pageNum: number, pageSize: number) {
    console.log("get all employees");
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:password')
    });
  
    this.http
      .get<any>(
        `http://localhost:8080/api/employees?pageNum=${pageNum}&pageSize=${pageSize}`,
        { headers }
      )
      .subscribe({
        next: (response) => {
          this.dataSource = response.data.data;
          console.log(this.dataSource);
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
    this.getAllEmployees(event.pageIndex, event.pageSize);
  }

    deleteDepartment(id: number): void {
    if (confirm(`Are you sure you want to delete this department ${id}?`)) {
      this.departmentService.deleteDepartment(id).subscribe({
                    next: () => {
                        this.getAllEmployees(this.pageNumber, this.pageSize);
                        alert(`Department "Department with ${id}" deleted successfully.`);
                    },
                    error: (error) => {
                        console.error('Error deleting department:', error);
                        alert('Failed to delete department. Please try again.');
                    }
    });
  }
    }
}
