import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'prefix',
        loadComponent: () => import('@pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
    },
    {
        path:'official',
        loadChildren: () => import('@pages/official/offical.routes').then(mod => mod.officialRoute)
    },
];
