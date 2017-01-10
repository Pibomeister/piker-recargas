import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'history', component: HistoryComponent },
    { path: '', pathMatch:'full', redirectTo: '/login' }
];

export const appRouting = RouterModule.forRoot(routes);