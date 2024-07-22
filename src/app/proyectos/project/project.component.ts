import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { IProject } from '../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  LIST_PROJECTS: IProject[] = [
    {
      title: 'KEY MG',
      description:
        'Key MG es un proyecto de innovación realizado en Python que busca canciones que combinen armónicamente con una canción seleccionada previamente. El fin del proyecto fue automatizar la busqueda creativa que tiene un DJ al momento de armar sus sets de canciones. ',
      imgUri: 'assets/images/keyMG.webp',
      tags: ['API Spotify', 'Python'],
      projectUri: '',
      githubUri: '',
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
  ];
}
