import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {FormControl} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recaptcha = new FormControl('');

  siteKey: string;
  constructor(public _MessageService: MessageService) {
    this.siteKey = '6LdX_yEaAAAAAPNF3LIK63eRAGDXwiiHdvEtaFqw';
   }

  public phone = '[ +529988443544 ]' + 'Easyaccess';
  public title = '[ Hola, me interesa su servicio ]';

  handleSuccess (captchaResponse: string) {
    console.log (`Token de respuesta resuelto: ${captchaResponse}`);

  }

  contactForm(form: any) {

    if (form.invalid) {
          Swal.fire(
            'Error',
            'Ingrese todos los datos al formulario',
            'error'
            );
          return;
    }
    this._MessageService.sendMessage(form.value).subscribe(() =>  {
    
          Swal.fire(
            'Formulario Contacto',
            'Mensaje enviado correctamente',
            'success'
          );
        });
    
        }

  ngOnInit(): void {
  }

}
