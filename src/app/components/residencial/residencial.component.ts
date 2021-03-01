import { Component, OnInit, Renderer2 } from '@angular/core';
import Swal from 'sweetalert2';
import { MessageService } from '../../services/message.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-residencial',
  templateUrl: './residencial.component.html',
  styleUrls: ['./residencial.component.css']
})
export class ResidencialComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');

  // tslint:disable-next-line:max-line-length
  constructor(public _MessageService: MessageService, private formBuilder: FormBuilder , private _renderer: Renderer2 , private _http: HttpClient) { }

  // tslint:disable-next-line:typedef
  contactForm(form: any) {

    if (form.invalid) {
          Swal.fire({
            icon: 'warning',
            title: 'Todos los campos del formulario son obligatorios',
            text: '*Todos los campos deben tener más de 5 letras*',
            backdrop: `rgba(0,0,0,0.7)`

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

}
