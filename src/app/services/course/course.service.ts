import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:4200/api/cursos';

  constructor() { }


  getAll(): any {
    return fetch(this.baseUrl+"/cursos", {method: 'GET'})
  }

  getAllDocente(): any {
    return fetch(this.baseUrl+"/docente", {method: 'GET'})
  }

  getAllTema(): any {
    return fetch(this.baseUrl+"/temas", {method: 'GET'})
  }

  createCourse(course:any): any {
    return fetch(this.baseUrl+"/cursos", {method: 'POST', body:course})
  }
}
