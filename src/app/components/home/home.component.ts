import { Component, OnInit, Renderer2 } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgsRevealConfig} from 'ngx-scrollreveal';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgsRevealConfig],
})
export class HomeComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;
  // public aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');

  siteKey: string;
  // theme: string;

  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:max-line-length
  constructor(public _MessageService: MessageService, private formBuilder: FormBuilder, config: NgsRevealConfig, private _renderer: Renderer2,
              private _http: HttpClient) {
    this.siteKey = '6LdX_yEaAAAAAPNF3LIK63eRAGDXwiiHdvEtaFqw';
    // this.theme = "dark";


    config.duration = 5000;
  //  config.scale = 10;
    config.origin = 'left';
    config.origin = 'top';
    config.distance = '400px';

   }

  public phone = '[ +529988443544 ]' + 'Easyaccess';
  public title = '[ Hola, me interesa su servicio ]';

  public phonetecnico = '[ +529988443544 ]' + 'Técnico Easyaccess';
  public titletecnico = '[ Hola, Tengo un problema con el servicio ]';

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

    // add te script
    const script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = 'https://www.google.com/recaptcha/api.js';
    this._renderer.appendChild(document.body, script);
  }


  resolved(token: any){
console.log(token);
this._http.post('',{token: token}).subscribe(
  res =>{

    console.log('success or not?', res);

  }
);
  }

  
}
