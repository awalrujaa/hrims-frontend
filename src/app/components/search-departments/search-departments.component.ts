// import { Component, OnInit } from '@angular/core';
// import { DepartmentService } from '../../service/department.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { DepartmentSharedService } from '../../service/department-shared.service';



// @Component({
//   selector: 'app-search-departments',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './search-departments.component.html',
//   styleUrl: './search-departments.component.css'
// })
// export class SearchDepartmentsComponent {
//   departments: any[] = [];
//   constructor(private departmentSharedService: DepartmentSharedService) {}

//   ngOnInit(): void {
//     this.departmentSharedService.departments$.subscribe({
//       next: (data) => {
//         this.departments = data;
//       },
//       error: (err) => {
//         console.error('Error receiving department data', err);
//       }
//     });
//   }
// }