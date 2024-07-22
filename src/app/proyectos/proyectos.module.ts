import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProyectosComponent],
  imports: [CommonModule, ProjectComponent],
  exports: [ProyectosComponent],
})
export class ProyectosModule {}
