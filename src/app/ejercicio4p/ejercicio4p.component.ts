import { Component } from '@angular/core';
import { Ejercicio4hComponent } from '../ejercicio4h/ejercicio4h.component';

@Component({
  selector: 'app-ejercicio4p',
  standalone: true,
  imports: [Ejercicio4hComponent],
  templateUrl: './ejercicio4p.component.html',
  styleUrl: './ejercicio4p.component.css'
})
export class Ejercicio4pComponent {

  comentarios:string [] = [];

  recibir(dato:string){
    this.comentarios.push(dato);
  }


}
