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
  toCaracter(){
    document.getElementById('caracter')?.scrollIntoView({behavior: 'smooth'});
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
  // toFunctions(){
  //   document.getElementById('funciones')?.scrollIntoView({behavior: 'smooth'});
  // }

}

