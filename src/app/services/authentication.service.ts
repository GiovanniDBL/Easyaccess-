import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser} from '../models/user.model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';



const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);

// *URL DE LA API DE NUESTO SERVIDOR EXPRESS
  private urleasyaccess = 'http://localhost:3000/user1/';


  constructor(private http: HttpClient) {

    this.checkToken();
   }

   get isLogged(): Observable<boolean>{
     return this.loggedIn.asObservable();
   }


// *LLamando la función de authentication Login de nuestra API
  postQuery(query: string, object: any): any{

    const url = `${this.urleasyaccess}${query}`;
    return this.http.post(url, object);
  }
  AuthController(loginModel: LoginUser): any{
    return this.postQuery('login', loginModel).pipe(map((response: any) => {
   console.log('Res->', response);
   this.saveToken(response.token);
   this.loggedIn.next(true);

      return response;
    }));
  }

// *GUARDAR TOKEN EN LOCAL STORAGE

private saveToken(token: string): void{
  localStorage.setItem('token', token);
}

// *CERRAR SESIÓN, ELIMINANDO TOKEN

logout(): void{
  localStorage.removeItem('token');
  this.loggedIn.next(false);
}

// *LEER TOKEN

private checkToken(): void {
  const userToken = localStorage.getItem('token');
  const isExpired =  helper.isTokenExpired(userToken); // *QUITAR COMILLAS
  console.log('isExpired->', isExpired);

  isExpired ? this.logout() : this.loggedIn.next(true);
  // if (isExpired) {
  //   this.logout();
  // }else{
  //   this.loggedIn.next(true);
  // }
}



}
