import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../shared/models/products.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CardModule,InputTextModule,ButtonModule,ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  agregarForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.agregarForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      amount: ['', [Validators.required, Validators.min(1)]],
      img: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit() {
    if (this.agregarForm.valid) {
      const product: IProduct = this.agregarForm.value;
      this.productService.addProduct(product).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          this.agregarForm.reset();
        },
        error: (err) => {
          console.error('Error adding product:', err);
        }
      });
    } else {
      console.log('Form Invalid');
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']); 
  }
}
