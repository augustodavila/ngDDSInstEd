import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  baseUrl = 'http://localhost:4200/api/temas';

  constructor() { }

  getAllTemas(): any {
    return fetch(this.baseUrl, {method: 'GET'})
  }
}
