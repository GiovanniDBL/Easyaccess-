import { style } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }




  // tslint:disable-next-line:typedef
  toInicio(){
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'});
  }
  // tslint:disable-next-line:typedef
  toContacto(){
    document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'});
    // tslint:disable-next-line:no-unused-expression
    
  }
  // tslint:disable-next-line:typedef
  toFunction1(){
    document.getElementById('funcion1')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction2(){
    document.getElementById('funcion2')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction3(){
    document.getElementById('funcion3')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction4(){
    document.getElementById('funcion4')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction5(){
    document.getElementById('funcion5')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction6(){
    document.getElementById('funcion6')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction7(){
    document.getElementById('funcion7')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction8(){
    document.getElementById('funcion8')?.scrollIntoView({behavior: 'smooth'});
  }
  toFunction9(){
    document.getElementById('funcion9')?.scrollIntoView({behavior: 'smooth'});
  }
  // tslint:disable-next-line:typedef
  toInstructions(){
    document.getElementById('instrucciones')?.scrollIntoView({behavior: 'smooth'});
  }
  toCaracteristicas(){
    document.getElementById('caracteristicas')?.scrollIntoView({behavior: 'smooth'});
  }
  toPlanes(){
    document.getElementById('planes')?.scrollIntoView({behavior: 'smooth'});
  }
  toService(){
    document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});
  }
  toBeneficio(){
    document.getElementById('beneficios')?.scrollIntoView({behavior: 'smooth'});
  }
   toGaleria(){
    document.getElementById('galeria')?.scrollIntoView({behavior: 'smooth'});
  }
  


}

