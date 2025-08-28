import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IProject } from '../../models/project';
import { ISobreMi } from '../../models/sobreMi';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  project: IProject = {
    title: '',
    longDescription: '',
    description: '',
    tags: [],
    imgUri: '',
    projectUri: '',
    githubUri: ''
  };
  sobreMi: ISobreMi = {
    title: '',
    description: '',
    imgUri: ''
  };
  @Input() value! : IProject | ISobreMi;
  isProject(value: IProject | ISobreMi): value is IProject {
    return 'longDescription' in value && 'tags' in value;
  }

}
