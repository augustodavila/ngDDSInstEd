import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  courses: any=[Course];

  constructor(public courseService:CourseService, public router: Router) { }

  ngOnInit(): void {
    this.courseService.getAll().then((response:any)=>{
      response.json().then((data:[Course])=>{
        this.courses=data;
        console.log(this.courses)
      })
    })
  }

  createCourse():void{
    this.router.navigate(['course-create']);
  }

}
