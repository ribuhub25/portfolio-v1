import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./projects.component').then(m => m.ProjectsComponent)  
    },
    {
        path: ':project_name',
        loadComponent: () => import('./project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
    }
];

