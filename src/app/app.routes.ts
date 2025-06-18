import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'tasks',
        component: Tasks
    },
    {
        path: 'profile',
        component: Profile
    }
];
