import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {
  
  @Input() isSidebarCollapsed = false; // Receive the collapsed state
  @Output() toggleSidebar = new EventEmitter<void>();
  
  onToggleSidebar() {
    console.log('Sidebar toggled');
    this.toggleSidebar.emit();
  }

}
