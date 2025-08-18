import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { IProject } from '../../../models/project';

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.scss'
})
export class SectionProjectsComponent {
    LIST_PROJECTS: IProject[] = [
      {
        title: 'KEY MG',
        description:
          'Key MG es un proyecto de innovación realizado en Python que busca canciones que combinen armónicamente con una canción seleccionada previamente. El fin del proyecto fue automatizar la busqueda creativa que tiene un DJ al momento de armar sus sets de canciones. ',
        imgUri: 'assets/images/keyMG.webp',
        tags: ['API Spotify', 'Python'],
        projectUri:
          'https://www.facebook.com/ACREDITACIONYCALIDADFIIS/videos/246305404871839',
        githubUri: 'https://github.com/ribuhub25/keyMG',
      },
      {
        title: 'CANTOR HOME',
        description:
          'Cantor Home es un proyecto realizado con React JS que consume un backend de prueba en PHP, la idea fue construir un sitio web para una empresa que comercializa muebles de melamina.',
        imgUri: 'assets/images/cantoro.webp',
        tags: ['PHP', 'ReactJS'],
        projectUri: 'https://cantorohome.netlify.app',
        githubUri: 'https://github.com/ribuhub25/TiendaVirtual',
      },
      {
        title: 'TORTELIN APP',
        description:
          'Proyecto realizado con Angular 18 con el uso de standalone components.',
        imgUri: 'assets/images/torteliniapp.webp',
        tags: ['Angular', 'Boostrap', 'ecommerce'],
        projectUri: 'https://torteliniapp.netlify.app',
        githubUri: 'https://github.com/ribuhub25/landingPageTortelin',
      },
    ];
}
