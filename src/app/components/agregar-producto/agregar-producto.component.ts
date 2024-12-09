import { Component } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
 

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CardModule, ButtonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  form: FormGroup;
  productos: any[]= [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      img: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }
  addProduct(){
    if (this.form.valid) {
      console.log('Producto agregado:', this.form.value);
      alert('Producto agregado exitosamente');
      this.form.reset();  
    } else {
      console.error('Formulario inválido');
      alert('Formulario inválido. Por favor, completa todos los campos correctamente.');
    }
  }
}