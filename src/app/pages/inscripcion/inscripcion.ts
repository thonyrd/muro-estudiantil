import { Component } from '@angular/core';

import {

ReactiveFormsModule,

FormGroup,

FormControl,

Validators

} from '@angular/forms';

@Component({

selector: 'app-inscripcion',

imports: [ReactiveFormsModule],

templateUrl: './inscripcion.html',

styleUrl: './inscripcion.css'

})

export class Inscripcion {

formularioPedido = new FormGroup({

nombre: new FormControl('', [

Validators.required,

Validators.minLength(3)

]),

apellido: new FormControl('', [

Validators.required,

Validators.minLength(3)

]),

correo: new FormControl('', [

Validators.required,

Validators.email

]),

carrera: new FormControl('', [

Validators.required

]),

actividad: new FormControl('', [

Validators.required

]),

jornada: new FormControl('', [

Validators.required

]),

comentario: new FormControl('')

});

enviarPedido() {

if (this.formularioPedido.valid) {

console.log('Inscripción enviada:', this.formularioPedido.value);

alert('Inscripción registrada correctamente');

this.formularioPedido.reset();

} else {

alert('Debe completar correctamente los campos obligatorios');

this.formularioPedido.markAllAsTouched();

}

}

}