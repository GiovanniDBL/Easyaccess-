import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { ReportUser } from '../../../models/reports.model';
import { EasyaccessService } from '../../../services/easyaccess.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');

  reportUser: ReportUser = new ReportUser();



  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private _renderer: Renderer2, private easyacces: EasyaccessService) { }




  // tslint:disable-next-line:typedef
  reportForm(form: NgForm) {

    if ( form.invalid ){ return }

    console.log(this.reportUser);

    this.easyacces.newReport(this.reportUser).subscribe( (response: any) => {

      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Reporte enviado con éxito',
        backdrop: `rgba(0,0,0,0.7)`

      }
        );

    }, (err: any) =>{
      Swal.fire({
        icon: 'error',
        title: 'Error al envíar reporte',
        text: err.error.message,
        backdrop: `rgba(0,0,0,0.7)`

      });




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
  }

}
