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

    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    producto: new FormControl('', [
      Validators.required
    ]),

    cantidad: new FormControl(1, [
      Validators.required,
      Validators.min(1)
    ]),

    direccion: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),

    comentario: new FormControl('')
  });

  enviarPedido() {
    if (this.formularioPedido.valid) {
      console.log('Pedido enviado:', this.formularioPedido.value);
      alert('Pedido registrado correctamente');
      this.formularioPedido.reset({ cantidad: 1 });
    } else {
      alert('Debe completar correctamente los campos obligatorios');
      this.formularioPedido.markAllAsTouched();
    }
  }
}
