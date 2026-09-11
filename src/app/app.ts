import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Cabecera }
  from './components/cabecera/cabecera';

import { Menu }
  from './components/menu/menu';

@Component({
  imports: [Cabecera, Menu, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('muro-estudiantil');
}
