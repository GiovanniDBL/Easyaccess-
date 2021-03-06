import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './routes';




// Importaciones para contacto
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { EscolarComponent } from './components/escolar/escolar.component';
import { CorporativoComponent } from './components/corporativo/corporativo.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
// import { NgxCaptchaModule } from 'ngx-captcha';



import { from } from 'rxjs';


// SCROLLREVEAL
// import {NgsRevealModule} from 'ngx-scrollreveal';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { LoginComponent } from './components/login/login.component';
import { ReportesComponent } from './components/departamentoReportes/reportes/reportes.component';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FuncionesComponent,
    ResidencialComponent,
    EscolarComponent,
    CorporativoComponent,
    ConstruccionComponent,
    LoginComponent,
    ReportesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    // NgxCaptchaModule,
    ReactiveFormsModule,
    NgxWhastappButtonModule,
  NgsRevealModule,
  RecaptchaModule, RecaptchaFormsModule

  ],
  providers: [MessageService, AuthenticationService, {
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
