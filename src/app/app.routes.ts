import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
    },
    {
        path: "projects",
        loadChildren: () => import("./pages/projects/projects.routes").then(m => m.routes)
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
