import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');

  siteKey: string;
  theme: string;

  constructor(public _MessageService: MessageService, private formBuilder: FormBuilder) {
    this.siteKey = '6LdX_yEaAAAAAPNF3LIK63eRAGDXwiiHdvEtaFqw';
    this.theme = "dark";
    
   }

  public phone = '[ +529988443544 ]' + 'Easyaccess';
  public title = '[ Hola, me interesa su servicio ]';

  handleSuccess (captchaResponse: string) {
    console.log (`Token de respuesta resuelto: ${captchaResponse}`);

  }

  contactForm(form: any) {

    if (form.invalid) {
          Swal.fire({
            icon: 'warning',
            title: 'Todos los campos del formulario son obligatorios',
            text: '*Todos los campos deben tener más de 5 letras*',
            backdrop: `rgba(0,0,0,0.7)`
            // imageUrl: 'assets/img/iconEAhd.png',
            // imageWidth: 100,
            // imageHeight: 100,
          }
            );

          return;
    }
    this._MessageService.sendMessage(form.value).subscribe(() =>  {

          Swal.fire({
             icon: 'success',
              title: 'Mensaje enviado correctamente',
              backdrop: `rgba(0,0,0,0.7)`
          }
          );
        });

        }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

}
