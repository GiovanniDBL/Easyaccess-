import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { ReportUser} from '../../../models/reports.model';
import { EasyaccessService } from '../../../services/easyaccess.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');
  reportUser: ReportUser = new ReportUser();

     nombre = localStorage.getItem('nombre');
     // tslint:disable-next-line:variable-name
     id_usuario = localStorage.getItem('id');

   departamento: any = [];

   image = '';
   imgURL = 'assets/img/cheque.png';

   



  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private _renderer: Renderer2, private easyacces: EasyaccessService, public autheasyaccess: AuthenticationService, private http:HttpClient) {

// *Si existe en el localstorage el token, entonces el usuario puede entrar a la página reportes
// * de lo contrario, lo regresará el login.

    if (localStorage.getItem('token')) {

    } else {
      this.router.navigate(['login']);
    }
   }
// * Borrar token de local storage
   // tslint:disable-next-line:typedef
   delete() {
  localStorage.clear();
  this.router.navigate(['login']);
  }

  // tslint:disable-next-line:typedef
  selectimage(event: any){

    if (event.target.files.length > 0) {

      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event: any) =>{

        this.imgURL = event.target.result;
      };
      this.image = file;
      console.log(this.image);
    }




  }


  // tslint:disable-next-line:typedef
  reportForm(form: NgForm) {
console.log(form);

    // if ( form.invalid ){ return }
if (form.invalid) {
      Swal.fire({
        icon: 'info',
        title: 'Todos los campos del formulario son obligatorios',
        text: 'Verifique que todos los campos estén llenos',
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

    console.log(this.reportUser);

this.easyacces.newReport(this.reportUser).subscribe( (response: any) => {

      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'REPORTE ENVÍADO CON ÉXITO',
        backdrop: `rgba(0,0,0,0.7)`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }

      }
        );

    }, (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'ERROR AL ENVÍAR REPORTE',
        text: err.error.message,
        backdrop: `rgba(0,0,0,0.7)`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }

      });

      // RESETEAR EL FORMULARIO DESPUES DE UNA ACCIÓN
      // .then(() => {
      //   form.reset();
      //                });




    });



  }





  ngOnInit(): void {

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    const script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = 'https://www.google.com/recaptcha/api.js';
    this._renderer.appendChild(document.body, script);

    this.easyacces.getDepartamento().subscribe( resp =>{
      // console.log(resp);
      this.departamento = resp;
      
    });
  }

}
