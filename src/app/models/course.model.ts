import { Aula } from "./aula.model";
import { Docente } from "./docente.model";
import { Empresa } from "./empresa.model";
import { Tema } from "./tema.model";

export class Course {
    id?: number;
    tema?: Tema;
    fechaInicio?: String;
    fechaFin?: String;
    docente?: Docente;
    nombre?: String;
    precioPorAlumno?: number;
    precioTotal?: number;
    aula?: Aula;
    cantidadAlumnos?: number;
    empresa?: Empresa;
}
