import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


export interface DepartmentElement {
  num: number;
  name: string;
  code: string;
}

const DEPARTMENT_DATA: DepartmentElement[] = [
  {num: 1, name: 'Human Resources', code: 'HR001'},
  {num: 2, name: 'Engineering', code: 'ENG12'},
  {num: 3, name: 'Marketing', code: 'MRKT1'},
  {num: 4, name: 'Infrastructures', code: 'INFRA'},
];

@Component({
  selector: 'app-main-body',
  imports: [MatTableModule, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {

  displayedColumns: string[] = ['num', 'name', 'code', 'actions'];
  dataSource = DEPARTMENT_DATA;
}
