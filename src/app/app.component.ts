import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton, MatFabAnchor } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIcon,
    MatFabButton,
    MatFabAnchor,
    MatButtonModule,
    MatCardModule,
    NavbarComponent,
    ExperienceComponent,
    ProyectosModule,
    SobreMiComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'portfolio';
  url = '/assets/icons/merge.svg';
  // currentTheme = document.documentElement.attributes.item(1)?.value;
}
