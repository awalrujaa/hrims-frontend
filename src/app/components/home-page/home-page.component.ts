import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, NavBarComponent, SideBarComponent, CommonModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  isSidebarCollapsed = false;

  toggleSidebar() {
    console.log('Click event triggered');
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
