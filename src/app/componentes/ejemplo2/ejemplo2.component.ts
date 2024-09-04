import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo1Component } from '../ejemplo1/ejemplo1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [Ejemplo1Component, RouterLink],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css'
})
export class Ejemplo2Component implements OnInit, OnDestroy {
  saludo='Ejemplo 2 works';
  imagenes = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc70Zef7LYMzGFLOCKNr10niUYh8WZv81Wtw&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2wkgY4dn87epDaKTPiKyzZoNuYc0JDE7Zg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Vb_s0z-F0lzi0ya-CmcyPapW-c5Kzd2zRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3m9RKU7uLV6arYJF_CyGRimaMn73nzLiMA&s"
  ]
  imagenActual = this.imagenes[0];
  constructor(){}

  ngOnInit(): void {
    console.log('Componente inicializado')
  }
  ngOnDestroy(): void {
    console.log('Componente destruido')
  }

  enviarImagen(indice: number){
    this.imagenActual = this.imagenes[indice]
 
  }

  onEmit(mensaje: string){
    this.saludo = mensaje;
  }
}
