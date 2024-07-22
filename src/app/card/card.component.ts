import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IProject } from '../models/project';
import { ISobreMi } from '../models/sobreMi';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  project: IProject = {
    title: '',
    description: '',
    tags: [],
    imgUri: ''
  };
  sobreMi: ISobreMi = {
    title: '',
    description: '',
    imgUri: ''
  };
  @Input() value = this.project;
}
