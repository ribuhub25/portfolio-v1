import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SectionProjectsComponent } from './pages/home/section-projects/section-projects.component';
import { SectionPresentationComponent } from './pages/home/section-presentation/section-presentation.component';
import { SobreMiComponent } from "./pages/home/section-about-me/section-aboutme.component";
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    NavbarComponent,
    CommonModule,
    SectionProjectsComponent,
    SectionPresentationComponent,
    SobreMiComponent,
    FooterComponent
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
