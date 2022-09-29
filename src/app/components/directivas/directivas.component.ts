import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  variable1: number = 10;
  variable2: number = 5;
  usuarioActivo: Persona = {
    nombre: 'Carlos',
    edad: 26
  }
  listaNombres: Array<Persona> = [
    {nombre: 'Gian', edad: 25},
    {nombre: 'Pepe', edad: 15},
    {nombre: 'Bianca', edad: 20},
    {nombre: 'Maria', edad: 44},
    {nombre: 'Pablo', edad: 10},
  ];

  fecha: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
