import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    cuenta: [''],
    pass: [''],
  });

  constructor(private authSvc: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    const userData = {
      cuenta: '12345',
      pass: 'danybl'
    };

    // tslint:disable-next-line: deprecation
    this.authSvc.login(userData).subscribe( res => console.log('login'));
  }

  onLogin(): void{
    const formValue = this.loginForm.value;
    // tslint:disable-next-line: deprecation
    this.authSvc.login(formValue).subscribe(res => {
      if (res) {
        this.router.navigate(['']);
      }
    });
  }
}
