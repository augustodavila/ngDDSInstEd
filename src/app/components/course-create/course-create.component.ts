import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course/course.service';
import { Router } from '@angular/router';
import { DocenteService } from 'src/app/services/docente/docente.service';
import { TemaService } from 'src/app/services/tema/tema.service';
import { AulaService } from 'src/app/services/aula/aula.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  nombre="";
  tema="";
  temas:any=[];
  aula="";
  aulas:any=[];
  docente="";
  docentes:any=[];
  fechaInicio="";
  fechaFin="";
  precioPorAlumno="";
  showAlert=false;

  constructor(
    public courseService:CourseService,
    public docenteService:DocenteService,
    public temaService:TemaService,
    public aulaService:AulaService,
    public router:Router
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

    this.aulaService.getAllAulas().then((response:any)=>{
      response.json().then((data:any)=>{
        this.aulas=data;
        console.log(this.aulas)
      })
    })
  }


  close():void{
    this.router.navigate(['course-list']);
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
        "id":this.aula
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
    this.docente="";
    this.aula="";
    this.fechaInicio="";
    this.fechaFin="";
    this.precioPorAlumno="";
  }

}
