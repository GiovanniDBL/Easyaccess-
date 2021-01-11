import { Component,OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {FormControl} from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']

})
export class ContactoComponent implements OnInit {

  recaptcha = new FormControl('');
  
  siteKey: string;

  // tslint:disable-next-line:variable-name
  constructor(public _MessageService: MessageService) {

    this.siteKey = '6LdX_yEaAAAAAPNF3LIK63eRAGDXwiiHdvEtaFqw';
    
  }

  public phone = '[ +529983009969 ]';
  public title = '[ Hola, me interesa su servicio ]';



  // tslint:disable-next-line:typedef
  handleSuccess (captchaResponse: string) {
    console.log (`Token de respuesta resuelto: ${captchaResponse}`);

  }
  // tslint:disable-next-line:typedef



  contactForm(form: any) {

if (form.invalid) {
      Swal.fire(
        'Formulario Contacto',
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

// PRUEBA VALIDACION RECAPTCHA










