import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EasyaccessService } from '../../services/easyaccess.service';
import { LoginUser } from '../../models/user.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginUser: LoginUser = new LoginUser();


  constructor(private formbuilder: FormBuilder, private easyacces: EasyaccessService) { }

  // tslint:disable-next-line:typedef
  loginForm(form: NgForm){
    if ( form.invalid ){ return }

    console.log(this.loginUser);

    this.easyacces.newlogin(this.loginUser).subscribe( (response: any) => {

      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'REPORTE ENVÍADO CON ÉXITO',
        backdrop: `rgba(0,0,0,0.7)`

      }
        );

    }, (err: any) =>{
      Swal.fire({
        icon: 'error',
        title: 'USUARIO NO VALIDO',
        text: err.error.message,
        backdrop: `rgba(0,0,0,0.7)`

      });




    });



  }

  ngOnInit(): void {

    }


}
