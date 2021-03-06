import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginUser } from '../../models/user.model';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginUser: LoginUser = new LoginUser();


  constructor(private formbuilder: FormBuilder, private autheasyacces: AuthenticationService, private router: Router) {


  

   }

 // tslint:disable-next-line: typedef
 loginForm(form: NgForm){



   if (form.invalid) { return; }

  //  console.log(this.loginUser);

   this.autheasyacces.AuthController(this.loginUser).subscribe((response: any) => {

    if (response) {
      //  console.log(response);

      //  this.router.navigate(['reportes']);
       Swal.fire({
        allowOutsideClick: false,
      icon: 'success',
      title: 'Bienvenido',
      text: 'ACCESO CORRECTO',
      backdrop: `rgba(0,0,0,0.7)`,
      timer: 1500,
      showConfirmButton: false,
      
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }

    }).then(() => {
 localStorage.setItem('token', response.token);
 localStorage.setItem('nombre', response.nombre);
 localStorage.setItem('id', response.id[0].id_usuario);

 this.router.navigate(['reportes']);
              });

    }




  }, (err: any) =>{
    Swal.fire({
      icon: 'error',
      title: 'CUENTA O CONTRASEÑA INCORRECTA',
      text: err.error.message,
      backdrop: `rgba(0,0,0,0.7)`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }

    });
    // Swal.fire({
    //   icon: 'error',
    //   title: 'CUENTA O CONTRASEÑA INCORRECTAS',
    //   text: err.error.message,
    //   backdrop: `rgba(0,0,0,0.7)`

    // });

   });
 }



 




  ngOnInit(): void {

    }


}
