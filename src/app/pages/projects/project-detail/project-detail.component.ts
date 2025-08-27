import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NavbarComponent,MatButtonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

}
