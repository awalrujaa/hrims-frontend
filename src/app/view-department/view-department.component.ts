import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../department.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-view-department',
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './view-department.component.html',
  styleUrl: './view-department.component.css'
})


export class ViewDepartmentComponent implements OnInit {
  department: any; // This will hold the department data

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get 'id' from URL
    this.departmentService.getDepartmentById(id).subscribe({
      next: (data) => {
        this.department = data;
        console.log('Department data:', data); // Optional: debug log
      },
      error: (error) => {
        console.error('Error fetching department:', error);
      }
    });
  }
}

