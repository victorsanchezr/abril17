import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4h',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4h.component.html',
  styleUrl: './ejercicio4h.component.css'
})
export class Ejercicio4hComponent {
  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();

  comentario:string = "";

  enviarPadre(){
    this.llamadaPadre.emit(this.comentario);

  }

  enviarPadreEliminar(){

  }

  enviarPadreArray(){

  }

  enviarPadreEdades(){

  }

  enviarPadreDoble(){
    
  }


}
