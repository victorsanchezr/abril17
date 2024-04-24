import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2h',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2h.component.html',
  styleUrl: './ejercicio2h.component.css'
})
export class Ejercicio2hComponent {

  compra = ["Platano","Banana","Azucar","Leche","Fresas"];

  @Output()
  llamadapadre:EventEmitter<string>= new EventEmitter();

  

  enviarpadre(producto:string){
    this.llamadapadre.emit(producto);


  }





}
