import { Routes } from '@angular/router';

const calendatRoutes: Routes = [
    {
        'path': '',
        loadComponent: () => import('./calendar.component').then(m => m.CalendarComponent)
    }
];

export default calendatRoutes;