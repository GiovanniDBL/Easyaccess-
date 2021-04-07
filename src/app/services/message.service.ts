import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http: HttpClient) { }

  // *Servicio para hacer el envío deñ mensaje "CONTACTANOS" desde nuestra API

  sendMessage(body: any) {
    return this._http.post('http://localhost:3000/formulario', body);
    }
}
