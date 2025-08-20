import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SobreMiComponent } from "./section-about-me/section-aboutme.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SectionProjectsComponent } from "./section-projects/section-projects.component";
import { SectionPresentationComponent } from "./section-presentation/section-presentation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SobreMiComponent, FooterComponent, SectionProjectsComponent, SectionPresentationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
