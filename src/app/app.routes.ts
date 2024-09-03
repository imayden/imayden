import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MiuiComponent } from './components/detail-pages/miui/miui.component';
import { RedmiComponent } from './components/detail-pages/redmi/redmi.component';
import { DarkmodeComponent } from './components/detail-pages/darkmode/darkmode.component';
import { KwaidmComponent } from './components/detail-pages/kwaidm/kwaidm.component';


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
        path: 'miui-showcase',
        component: MiuiComponent,
    },
    {
        path: 'redmi-showcase',
        component: RedmiComponent,
    },
    {
        path: 'darkmode',
        component: DarkmodeComponent,
    },
    {
        path: 'kwai-dm',
        component: KwaidmComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
