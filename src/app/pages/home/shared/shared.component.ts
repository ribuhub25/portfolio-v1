import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-container',
  standalone: true,
  imports: [],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss'
})
export class SharedComponent {
  @Input() title: string = '';
}
