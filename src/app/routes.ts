import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { EscolarComponent } from './components/escolar/escolar.component';
import { CorporativoComponent } from './components/corporativo/corporativo.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { LoginComponent } from './components/login/login.component';

import { ReportesComponent } from './components/departamentoReportes/reportes/reportes.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'funciones', component: FuncionesComponent },
    { path: 'residencial', component: ResidencialComponent },
    { path: 'escolar', component: EscolarComponent },
    { path: 'corporativo', component: CorporativoComponent },
    { path: 'construccion', component: ConstruccionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
