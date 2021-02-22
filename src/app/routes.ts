import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { EscolarComponent } from './components/escolar/escolar.component';
import { CorporativoComponent } from './components/corporativo/corporativo.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'funciones', component: FuncionesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'residencial', component: ResidencialComponent },
    { path: 'escolar', component: EscolarComponent },
    { path: 'corporativo', component: CorporativoComponent },
    { path: 'construccion', component: ConstruccionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});