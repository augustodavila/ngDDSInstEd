import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course/course.service';
import { DocenteService } from 'src/app/services/docente/docente.service';
import { TemaService } from 'src/app/services/tema/tema.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  nombre="";
  tema="";
  temas:any=[];
  description="";
  docente="";
  docentes:any=[];
  fechaInicio="";
  fechaFin="";
  precioPorAlumno="";
  showAlert=false;

  constructor(
    public courseService:CourseService,
    public docenteService:DocenteService,
    public temaService:TemaService
  ) { }

  ngOnInit(): void {
    this.temaService.getAllTemas().then((response:any)=>{
      console.log(response)
      response.json().then((data:any)=>{
        this.temas = data;
        console.log(this.temas)
      })
    })

    this.docenteService.getAllDocentes().then((response:any)=>{
      response.json().then((data:any)=>{
        this.docentes=data;
        console.log(this.docentes)
      })
    })
  }


  test():void{
    console.log(this.fechaInicio, this.fechaFin)
  }

  createCourse():void{
  
    var course = {
      "tema":{
        "id":this.tema
      },
      "fechaInicio":this.fechaInicio,
      "fechaFin":this.fechaFin,
      "docente":{
        "id":this.docente
      },
      "nombre":this.nombre,
      "precioPorAlumno":this.precioPorAlumno,
      "aula":{
        "id":1
      }
    };
    console.log(course)
    this.courseService.createCourse(course).then((response:any)=>{
      if (response.status==200){
        response.json().then((data:any)=>{
          this.showAlert=true;
          console.log(data)
        })
      }else{
        alert("Error al crear curso")
      }

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
    this.precioPorAlumno="";
  }

}
