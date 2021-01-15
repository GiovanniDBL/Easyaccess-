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

}

