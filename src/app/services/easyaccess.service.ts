import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportUser } from '../models/reports.model';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LoginUser } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class EasyaccessService {

// *URL DE LA API DE NUESTO SERVIDOR EXPRESS
  private urleasyaccess = 'http://localhost:3000/user2/';

// *LLamando la función de reportes de nuestra API
  constructor(private http: HttpClient) { }

  postQuery( query: string, object: any ): any{

    const url = `${ this.urleasyaccess }${query}`;
    return this.http.post( url, object );
  }


   newReport( userModel: ReportUser ): any{
    return this.postQuery('reportes', userModel ).pipe( map( ( response: any ) => {
        return response;
       } ));
  }
























  // getQuery( query: string  ){

  //   const url = ${ this.urlSvr }${ query};
  //   const headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') });

  //   return this.http.get(url, { headers});
  // }


  // getAllEvaluations(): any{
  //   return this.getQuery('test/all-evaluations').pipe(
  //      map( (response:any) => response.result ));
  // }
}
