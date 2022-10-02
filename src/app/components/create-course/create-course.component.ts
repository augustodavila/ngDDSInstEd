import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

/*   public title:any="";

  constructor() { }

  ngOnInit(): void {
  }

  test():void{
    console.log(this.title)
  } */

  public name:any="";
  public theme:any="";
  public description:any="";
  public teacher:any="";
  public startdate:any="";
  public enddate:any="";
  public starttime:any="";
  public endtime:any="";
  public cost:any="";

  constructor() { }

  ngOnInit(): void {
  }

  test():void{
    console.log(this.name,this.theme,this.description,this.teacher,this.cost)
  }

}
