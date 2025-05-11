import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

export interface Departments {
  num: number;
  name: string;
  code: string;
}

const DEPARTMENT_DATA: Departments[] = [
  {num: 1, name: 'Human Resources', code: 'HR001'},
  {num: 2, name: 'Engineering', code: 'ENG12'},
  {num: 3, name: 'Marketing', code: 'MRKT1'},
  {num: 4, name: 'Infrastructures', code: 'INFRA'},
];

@Component({
  selector: 'app-department',
  imports: [CommonModule, MatTableModule, MatIconModule, MatTooltipModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})


export class DepartmentComponent {
  displayedColumns: string[] = ['num', 'name', 'code', 'actions'];
  dataSource = new MatTableDataSource(DEPARTMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

