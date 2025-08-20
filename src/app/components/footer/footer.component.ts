import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public email : string = "jhonatanribu25@gmail.com"; 
  public year : number = new Date().getFullYear();
  public profileGithub : string = "jhoribu25";
}
