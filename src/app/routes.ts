import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FuncionesComponent } from './components/funciones/funciones.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'funciones', component: FuncionesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);