import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1pComponent } from './ejercicio1p/ejercicio1p.component';
import { Ejercicio2pComponent } from './ejercicio2p/ejercicio2p.component';
import { Ejercicio2hComponent } from './ejercicio2h/ejercicio2h.component';
import { Ejercicio3pComponent } from './ejercicio3p/ejercicio3p.component';
import { Ejercicio4pComponent } from './ejercicio4p/ejercicio4p.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ejercicio1pComponent,Ejercicio2pComponent,Ejercicio3pComponent,Ejercicio4pComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril17';
}
