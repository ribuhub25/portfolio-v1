import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-section-presentation',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './section-presentation.component.html',
  styleUrl: './section-presentation.component.scss'
})
export class SectionPresentationComponent {
  years_experience : number = 3 
  grade : string = "Egresado"
  career : string = "Ingeniería de Sistemas"
  university : string = "Universidad Nacional de Ingeniería"
  city : string = "Lima"
  country : string = "Perú"
  speciality : string = "Desarrollo de Aplicaciones Web"
  email : string = "jhonatanribu25@gmail.com"
  linkedin : string = "https://linkedin.com/in/jhoribu25"
  shortname : string = "Jhonatan Riquelme"
}
