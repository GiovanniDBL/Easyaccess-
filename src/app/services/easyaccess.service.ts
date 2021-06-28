import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportUser } from '../models/reports.model';
import { ReportesComponent } from '../components/departamentoReportes/reportes/reportes.component';

import {map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EasyaccessService {

// *URL DE LA API DE NUESTO SERVIDOR EXPRESS
  private urleasyaccess = 'http://localhost:3000/user2/';
  private urldepartamentos = 'http://localhost:3000/select/';
  private urlsendticket = 'http://localhost:3000/user2/';


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
 
 

  getQuery( query: string, object: any ): any{

    const url = `${ this.urldepartamentos }${query}`;
    return this.http.get( url, object );
  }
 

  getDepartamento(){
    return this.http.get(`${this.urldepartamentos}departamento`);
  }



 

}


