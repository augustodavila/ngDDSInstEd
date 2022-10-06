import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  public nombre:any="";
  public tema:any="";
  public temas:any=[];
  public description:any="";
  public docente:any="";
  public docentes:any=[];
  public fechaInicio:any="";
  public fechaFin:any="";
  public precioTotal:any="";
  public showAlert:any=false;

  constructor(public courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllTema().then((response:any)=>{
      response.json().then((data:any)=>{
        this.temas=data;
        console.log(this.tema)
      })
    })

    this.courseService.getAllDocente().then((response:any)=>{
      response.json().then((data:any)=>{
        this.docentes=data;
        console.log(this.docente)
      })
    })
  }


  test():void{
    console.log(this.nombre,this.tema,this.description,this.docente,this.precioTotal)
  }

  createCourse():void{
  
    var course = {
      tema:{
        
      },
      fechaInicio:this.fechaInicio,
      fechaFin:this.fechaFin,
      docente:{

      },
      
      nombre:this.nombre,
      precioTotal:this.precioTotal,
      
    }

    this.showAlert=true;

    this.courseService.createCourse(course).then((response:any)=>{
      response.json().then((data:any)=>{
        console.log(data)
      })
    })
  }



  closeAlert():void{
    this.showAlert=false;
    this.nombre="";
    this.tema="";
    this.description="";
    this.docente="";
    this.fechaInicio="";
    this.fechaFin="";
    this.precioTotal="";
  }

}
