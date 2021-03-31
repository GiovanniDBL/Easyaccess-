import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userToken: string | undefined;

  private urleasyaccess = 'http://localhost:3000/user1/';

  constructor(private http: HttpClient) { }

  postQuery(query: string, object: any): any{

    const url = `${this.urleasyaccess}${query}`;
    return this.http.post(url, object);
  }
  AuthController(loginModel: LoginUser): any{
    return this.postQuery('login', loginModel).pipe(map((response: any) => {

      return response;
    }));
  }




}
