import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { IProject } from '../../../models/project';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NavbarComponent,MatButtonModule, MatChipsModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  project: IProject = {
    title: '',
    description: '',
    longDescription: '',
    tags: [],
    imgUri: '',
    projectUri: '',
    githubUri: ''
  };
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    const nav = this.router.getCurrentNavigation();
    this.project = nav?.extras.state?.['data'];
    viewportScroller.scrollToPosition([0,0]);
  }

}
