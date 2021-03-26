import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserResponse, User } from '../models/user.model';
import {JwtHelperService} from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urleasyaccess = 'http://localhost:3000/user2/';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken();
   }

// ******************* LOGIN ***********************

get isLogged(): Observable<boolean>{
  return this.loggedIn.asObservable();
}


login(authData: User): Observable<UserResponse | void>{
  return this.http.post<UserResponse>(`${this.urleasyaccess}`,
   authData
   ).pipe(map((res: UserResponse) => {
   // Guardar token
     this.saveToken(res.token);
     this.loggedIn.next(true);
     return res;

   }),
   catchError((err) => this.handlerError(err))
   );
  }

  private handlerError(err: any): Observable<never>{
    let errorMessage = 'Ocurre un error, recuperando datos';

    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }
  private checkToken(): void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired();
    console.log('isExpired =>', isExpired);
    isExpired ? this.logout() : this.loggedIn.next(true);

    // if (isExpired) {
    //   this.logout();
    // }else{
    //   this.loggedIn.next(true);
    // }
     // set userIsLogged = isExpired;

  }
  private saveToken(token: string): void{
    localStorage.setItem('token', token);
  }

}
