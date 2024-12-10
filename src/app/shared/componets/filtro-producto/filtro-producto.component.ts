import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/products.models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-filtro-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filtro-producto.component.html',
  styleUrl: './filtro-producto.component.css'
})
export class FiltroProductoComponent {
  products: IProduct[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();  
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products; 
      },
      error: (err) => {
        console.error('Error loading products', err); 
      }
    });
  }
}
