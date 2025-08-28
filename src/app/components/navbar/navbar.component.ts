import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  darkmode = false;
  toggleDarkTheme(): void {
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute(
      'data-theme',
      this.darkmode ? 'dark' : 'light'
    );
  }
}
