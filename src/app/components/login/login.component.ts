import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EasyaccessService } from '../../services/easyaccess.service';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginUser } from '../../models/user.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginUser: LoginUser = new LoginUser();


  constructor(private formbuilder: FormBuilder, private autheasyacces: AuthenticationService) { }

 // tslint:disable-next-line: typedef
 loginForm(form: NgForm){
   if (form.invalid) { return }

   console.log(this.loginUser);

   this.autheasyacces.AuthController(this.loginUser).subscribe((response: any) => {

    console.log(response);
    Swal.fire({
      icon: 'success',
      title: 'USUARIO OK',
      backdrop: `rgba(0,0,0,0.7)`

    }
      );

  }, (err: any) =>{
    Swal.fire({
      icon: 'error',
      title: 'ERROR DE USUARIO',
      text: err.error.message,
      backdrop: `rgba(0,0,0,0.7)`

    });

   });
 }

  ngOnInit(): void {

    }


}
