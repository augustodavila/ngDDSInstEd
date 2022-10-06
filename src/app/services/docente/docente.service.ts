import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  
  baseUrl = 'http://localhost:4200/api/docentes';

  constructor() { }

  getAllDocentes(): any {
    return fetch(this.baseUrl, {method: 'GET'})
  }

}
