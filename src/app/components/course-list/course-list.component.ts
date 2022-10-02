import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any=[];

  constructor() { }

  ngOnInit(): void {
  }

  test2():void{
    this.courses.push({
      name: "Programacion y Diseño",
      theme: "Oficina",
      startDate: new Date(),
      endDate: new Date("03/01/2022"),
      teacher: "Carlos",
      studentsNumber: 33,
      totalPrice: 23000,
      courseReach: "Empresarial",
      business: "Toyota",
      classroom: 17,
   })
  }

}
