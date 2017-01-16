import { RouterModule, Routes } from '@angular/router';

import { AuthGard } from './auth.guard';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGard] },
    { path: 'history', component: HistoryComponent,  canActivate: [AuthGard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGard] },
    { path: '', pathMatch:'full', redirectTo: '/welcome' }
];

export const appRouting = RouterModule.forRoot(routes);