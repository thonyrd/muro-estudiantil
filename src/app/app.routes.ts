import { Routes } from '@angular/router';



import { Menu } from './components/menu/menu';
import { Cabecera } from './components/cabecera/cabecera';
import { Inicio } from './pages/inicio/inicio';
import { Actividades } from './pages/actividades/actividades';
import { Contacto } from './pages/contacto/contacto';
import { Inscripcion } from './pages/inscripcion/inscripcion';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'cabeceras',
    component: Cabecera
  },

  {
    path: 'menu',
    component: Menu
  },

  {
    path: 'inicio',
    component: Inicio
  },

  {
    path: 'actividades',
    component: Actividades
  },

  {
    path: 'inscripcion',
    component: Inscripcion
  },
    {
    path: 'contacto',
    component: Contacto
  }


];