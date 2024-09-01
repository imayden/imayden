import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MiuiComponent } from './components/detail-pages/miui/miui.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'work-miui',
        component: MiuiComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
