import { Component } from '@angular/core';
import { ISobreMi } from '../../../models/sobreMi';
import { MatChip } from "@angular/material/chips";
import { MatButtonModule } from '@angular/material/button';
import { SharedComponent } from "../shared/shared.component";

@Component({
  selector: 'app-section-aboutme',
  standalone: true,
  imports: [MatChip, MatButtonModule, SharedComponent],
  templateUrl: './section-aboutme.component.html',
  styleUrl: './section-aboutme.component.scss',
})
export class SobreMiComponent {
  infoPersonal:ISobreMi = {
    title: 'Jhonatan Rodrigo',
    description: 'Mi Nombre es Jhonatan Rodrigo, soy egresado de la carrera de ingeniería de sistemas. Me apasiona el desarrollo de software.',
    imgUri: "assets/images/perfil.jpg",
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL']
  }
}
