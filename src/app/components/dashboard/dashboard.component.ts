import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
  export class DashboardComponent {
    employeeCount: number = 0;
    newJoineeCount: number = 0;
    departmentCount: number = 0;
    leaveCount: number = 0;

    constructor() {}
    ngOnInit() {
      this.employeeCount = 40;
      this.newJoineeCount = 1;
      this.departmentCount = 5;
      this.leaveCount = 8;
    }
  }
