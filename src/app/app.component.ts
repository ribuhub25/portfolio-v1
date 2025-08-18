import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './pages/home/section-about-me/sobre-mi.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './pages/home/section-experience/experience.component';
import { SectionPresentationComponent } from './pages/home/section-presentation/section-presentation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCardModule,
    NavbarComponent,
    ExperienceComponent,
    SobreMiComponent,
    CommonModule,
    SectionPresentationComponent
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
