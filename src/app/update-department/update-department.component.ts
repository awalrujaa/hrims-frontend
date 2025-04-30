import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-department',
  imports: [MatIconModule, RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.css'
})
export class UpdateDepartmentComponent {

}
