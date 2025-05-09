import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, NavBarComponent, SideBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
