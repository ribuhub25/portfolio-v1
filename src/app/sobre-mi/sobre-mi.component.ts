import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ISobreMi } from '../models/sobreMi';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss',
})
export class SobreMiComponent {
  infoPersonal:ISobreMi = {
    title: 'Jhonatan Rodrigo',
    description: 'Mi Nombre es Jhonatan Rodrigo, soy estudiante de décimo ciclo de la carrera de ingeniería de sistemas. Estudie esta carrera debido a que siempre me ha interesado la tecnología y la programación debido a mi gusto por las matemáticas. Gracias a los años de estudio en la universidad eh conseguido habilidades como la gestión del tiempo, el manejo de la presión y la perseverancia. En la actualidad estoy buscando una empresa donde pueda iniciar mi trayectoria profesional donde pueda aplicar lo que he aprendido en mis años de estudio, y que este alineada al campo del desarrollo de sistemas.',
    imgUri: "assets/images/perfil.jpg",
  }
}
