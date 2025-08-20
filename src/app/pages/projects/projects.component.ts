import { Component } from '@angular/core';
import { NotfoundComponent } from "../notfound/notfound.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NotfoundComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
