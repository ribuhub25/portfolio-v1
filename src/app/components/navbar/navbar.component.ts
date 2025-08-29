import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import { IProject } from '../../models/project';
import { LIST_PROJECTS } from '../../data/project-list';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, RouterLink, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  darkmode = false;
  @Input() ocultarItem: boolean = true;

  toggleDarkTheme(): void {
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute(
      'data-theme',
      this.darkmode ? 'dark' : 'light'
    );
  }
  projects: IProject[] = LIST_PROJECTS;
}
