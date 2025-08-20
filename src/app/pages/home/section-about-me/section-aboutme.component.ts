import { Component } from '@angular/core';
import { ISobreMi } from '../../../models/sobreMi';
import { CardComponent } from '../../../components/card/card.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-section-aboutme',
  standalone: true,
  imports: [CardComponent, MatIcon],
  templateUrl: './section-aboutme.component.html',
  styleUrl: './section-aboutme.component.scss',
})
export class SobreMiComponent {
  infoPersonal:ISobreMi = {
    title: 'Jhonatan Rodrigo',
    description: 'Mi Nombre es Jhonatan Rodrigo, soy egresado de la carrera de ingeniería de sistemas. Me apasiona el desarrollo de software.',
    imgUri: "assets/images/perfil.jpg",
  }
}
