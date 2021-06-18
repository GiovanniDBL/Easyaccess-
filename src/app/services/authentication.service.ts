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


  constructor(private http: HttpClient) { }

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
  //  console.log('Res->', response);


   return response;
    }));
  }



}
