import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:4200/api/cursos';

  constructor() { }


  getAll(): any {
    return fetch(this.baseUrl, {method: 'GET'})
  }

  createCourse(course:any): any {
    return fetch(this.baseUrl, {method: 'POST', body:course, headers: {contentType: 'text/plain;charset=UTF-8'}})
  }
}
