import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { AdminSideBarComponent } from '../admin-side-bar/admin-side-bar.component';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, NavBarComponent, SideBarComponent, CommonModule, MatIconModule, AdminSideBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  isSidebarCollapsed = false;

  toggleSidebar() {
    console.log('Click event triggered');
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

}
