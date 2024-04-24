import { Component } from '@angular/core';
import { Ejercicio2hComponent } from '../ejercicio2h/ejercicio2h.component';

@Component({
  selector: 'app-ejercicio2p',
  standalone: true,
  imports:[Ejercicio2hComponent],
  templateUrl: './ejercicio2p.component.html',
  styleUrl: './ejercicio2p.component.css'
})
export class Ejercicio2pComponent {
  
  alirecib:string [] = [];

  recibir(dato:string){
    this.alirecib.push(dato);

  }
  

}
