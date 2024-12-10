import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductService } from '../../services/product.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FiltroProductoComponent } from '../../shared/componets/filtro-producto/filtro-producto.component';
 

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [ReactiveFormsModule ,FormsModule, ButtonModule, InputNumberModule,CardModule, FiltroProductoComponent],
  providers: [MessageService],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private router:Router
    
  ) {
    this.form = this.fb.group({
      productoId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  
    });
  }

  eliminarProducto() {
    if (this.form.valid) {
      const productoId = Number(this.form.value.productoId);  
      this.productService.deleteProduct(productoId).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: `Producto con ID ${productoId} eliminado`,
          });
          this.form.reset(); 
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `No se pudo eliminar el producto. Verifica el ID.`,
          });
          console.error(err);
        },
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Por favor ingresa un ID válido',
      });
    }
  }
  goToHome(): void {
    this.router.navigate(['/home']); 
  }
}
