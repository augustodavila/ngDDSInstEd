import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  baseUrl = 'http://localhost:4200/api/aulas'

  constructor() { }
  getAllAulas():any {
    return fetch(this.baseUrl, {method: 'GET'})
  }
}
