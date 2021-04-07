import { Component, OnInit, Renderer2 } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgsRevealConfig} from 'ngx-scrollreveal';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgsRevealConfig],
})
export class HomeComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;



  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:max-line-length
  constructor(public _MessageService: MessageService, public autheasyaccess: AuthenticationService, private formBuilder: FormBuilder, config: NgsRevealConfig, private _renderer: Renderer2,
              private _http: HttpClient) {




    // *CONFIGURACIÓN DEL SCROLLREVEAL
    config.duration = 5000;
    // !config.scale = 10;
    config.origin = 'left';
    config.origin = 'top';
    config.distance = '400px';

   }

   // *NUMEROS Y MENSAJES PARA CONTACTOS DE LOS BOTÓNES DE WHATSAPP (SE PUEDEN AGREGAR MÁS)
  public phone = ' +529988443544 ' + 'Easyaccess';
  public title = 'Hola, me interesa su servicio';

  public phonetecnico = '[ +529988443544 ]' + 'Técnico Easyaccess';
  public titletecnico = '[ Hola, Tengo un problema con el servicio ]';



  // tslint:disable-next-line:typedef
  contactForm(form: any) {

    // *VALIDACIÓN DEL FORMULARIO
    if (form.invalid) {
          Swal.fire({
            icon: 'warning',
            title: 'Todos los campos del formulario son obligatorios',
            text: '*Todos los campos deben tener más de 5 letras*',
            backdrop: `rgba(0,0,0,0.7)`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }

          }
            );

          return;
    }
    this._MessageService.sendMessage(form.value).subscribe(() =>  {

          Swal.fire({
             icon: 'success',
              title: 'Mensaje enviado correctamente',
              backdrop: `rgba(0,0,0,0.7)`,
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          }
          );
        });

        }

  ngOnInit(): void {

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    // *LLAMADO DEL GOOGLE RECAPTCHA PARA QUE NO DESAPAREZCA AL CAMBIAR DE PÁGINA
    const script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = 'https://www.google.com/recaptcha/api.js';
    this._renderer.appendChild(document.body, script);
  }

}
