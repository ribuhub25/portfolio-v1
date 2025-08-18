import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-section-presentation',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './section-presentation.component.html',
  styleUrl: './section-presentation.component.scss'
})
export class SectionPresentationComponent {

}
