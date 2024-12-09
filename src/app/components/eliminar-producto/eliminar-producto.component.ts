import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [ToastModule, CardModule, FormsModule, ReactiveFormsModule, ButtonModule, InputNumberModule],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      productoId: ['', Validators.required]
    });
  }

  validarFormulario() {
    if (this.form.valid) {
      // Lógica cuando el formulario es válido
    } else {
      // Lógica cuando el formulario no es válido
    }
  }
}
