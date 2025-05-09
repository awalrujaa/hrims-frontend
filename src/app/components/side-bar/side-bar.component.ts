import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-side-bar',
  imports: [MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  @Input() isSidebarCollapsed = false; // Receive the collapsed state
  @Output() toggleSidebar = new EventEmitter<void>();
  
  onToggleSidebar() {
    console.log('Sidebar toggled');
    this.toggleSidebar.emit();
  }

}
