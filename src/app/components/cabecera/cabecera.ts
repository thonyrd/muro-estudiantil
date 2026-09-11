import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  titulo: string = 'Muro Escolar';

  subtitulo: string =
    'Informate sobre las actividades y talleres disponibles';

}