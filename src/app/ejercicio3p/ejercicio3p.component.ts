import { Component } from '@angular/core';
import { Ejercicio3hComponent } from '../ejercicio3h/ejercicio3h.component';

@Component({
  selector: 'app-ejercicio3p',
  standalone: true,
  imports: [Ejercicio3hComponent],
  templateUrl: './ejercicio3p.component.html',
  styleUrl: './ejercicio3p.component.css'
})
export class Ejercicio3pComponent {

  asige:string [] = [];

  recibir(dato:string){
    this.asige.push(dato);
  }

}
