import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-nav-bar',
  imports: [MatIconModule, RouterLink, RouterLinkActive, MatTooltipModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  currentTime: string = '';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true  // Set to false if you want 24-hour format
    });
   }

}
