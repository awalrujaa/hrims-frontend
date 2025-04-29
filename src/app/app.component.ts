import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderComponent } from "./header/header.component";
import { MainBodyComponent } from "./main-body/main-body.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, SideBarComponent, HeaderComponent, MainBodyComponent, FooterComponent],
=======
import { HeaderComponent } from "./header/header.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { MainBodyComponent } from "./main-body/main-body.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SideBarComponent, MainBodyComponent, FooterComponent],
>>>>>>> f3a4aba66434330ba7b906c8d02a6dbbf84f1c02
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'project1';
=======
  title = 'hrims-frontend';
>>>>>>> f3a4aba66434330ba7b906c8d02a6dbbf84f1c02
}
