import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';

interface Persona {
  nombre: string
  imagen: string
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  @Input() imagenDelPadre: string = '';
  @Output() emisor = new EventEmitter<string>();
  imagen = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  nombre='';

  nombres: Persona[] = [{nombre:'Luis', imagen: ''}, 
    {nombre:'Andres', imagen: 'https://st3.depositphotos.com/3776273/31936/i/450/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg'},
    {nombre:'Juan', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s'},
    {nombre:'Lorena', imagen: 'https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg'}, 
    {nombre:'Veronica', imagen: 'https://www.clarin.com/img/2024/04/25/HKCtyMwSF_2000x1500__1.jpg'}]

 setName(){
   this.nombre = 'Darth Vader';
 }
 alerta(nombre: string){
  if(nombre === 'Darth Vader'){
    window.alert('soy tu padre');
  }
 }
}
