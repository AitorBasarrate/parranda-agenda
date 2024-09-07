import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'calendar', pathMatch: 'full'},
    {path: 'calendar', loadChildren: () => import('./calendar/calendar.routes') },
];
