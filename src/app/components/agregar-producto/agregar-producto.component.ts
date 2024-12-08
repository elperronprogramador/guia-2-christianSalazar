import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule, ToastModule ],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  producto = {
    nombre: '',
    precio: null,
    descripcion: '',
    unidades: null,
    img: '',
  };

  constructor(private messageService: MessageService) {}

  agregarProducto() {
    // Validación simple
    if (
      !this.producto.nombre ||
      this.producto.precio === null ||
      !this.producto.descripcion ||
      this.producto.unidades === null ||
      !this.producto.img
    ) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos incompletos',
        detail: 'Por favor completa todos los campos.',
      });
      return;
    }

    // Lógica para guardar el producto (ejemplo)
    console.log('Producto agregado:', this.producto);

    // Mostrar mensaje de éxito
    this.messageService.add({
      severity: 'success',
      summary: 'Producto agregado',
      detail: `El producto "${this.producto.nombre}" se ha agregado con éxito.`,
    });

    // Reiniciar el formulario
    this.producto = {
      nombre: '',
      precio: null,
      descripcion: '',
      unidades: null,
      img: '',
    };
  }
}
