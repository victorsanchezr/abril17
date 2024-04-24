import { Component } from '@angular/core';
import { Ejercicio1hComponent } from '../ejercicio1h/ejercicio1h.component';

@Component({
  selector: 'app-ejercicio1p',
  standalone: true,
  imports: [Ejercicio1hComponent],
  templateUrl: './ejercicio1p.component.html',
  styleUrl: './ejercicio1p.component.css'
})
export class Ejercicio1pComponent {

  mensaje:String = "Prueba padre";

}
