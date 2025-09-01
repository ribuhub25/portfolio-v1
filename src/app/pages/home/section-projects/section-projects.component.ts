import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { IProject } from '../../../models/project';
import { MatIconModule } from '@angular/material/icon';
import { LIST_PROJECTS } from '../../../data/project-list';
import { SharedComponent } from "../shared/shared.component";

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [CardComponent, CommonModule, MatIconModule, SharedComponent],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.scss'
})
export class SectionProjectsComponent {
    LIST_PROJECTS = LIST_PROJECTS;
}
