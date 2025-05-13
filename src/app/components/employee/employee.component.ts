import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatTooltipModule, 
    RouterLink, FormsModule, RouterOutlet],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})


export class EmployeeComponent {

  displayedColumns: string[] = ['id', 'name', 'code', 'actions'];
  dataSource = new MatTableDataSource<any>();
  pageSize = 4;
  pageNumber = 0;
  totalElements = 0;

  departments: any[] = [];


  searchText: string = '';



  constructor(
    private http: HttpClient, 
    private router: Router){}

}