import { Component } from '@angular/core';
import { SobreMiComponent } from "./section-about-me/section-aboutme.component";
import { SectionProjectsComponent } from "./section-projects/section-projects.component";
import { SectionPresentationComponent } from "./section-presentation/section-presentation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SobreMiComponent, SectionProjectsComponent, SectionPresentationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
