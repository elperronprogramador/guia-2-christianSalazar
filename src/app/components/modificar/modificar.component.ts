import { Component } from '@angular/core';
import { IProduct } from '../../shared/models/products.models';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
 

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent {
  productForm: FormGroup;
  isFormEnabled: boolean = false;  
  productData: IProduct | null = null; 

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      id: ['', Validators.required], 
      name: [{ value: '', disabled: true }, Validators.required],
      description: [{ value: '', disabled: true }],
      amount: [{ value: '', disabled: true }, [Validators.required, Validators.min(1)]],
      img: [{ value: '', disabled: true }],
      price: [{ value: '', disabled: true }, [Validators.required, Validators.min(0)]],
    });
  }

  searchProduct() {
    const productId = this.productForm.get('id')?.value;
    if (productId) {
      this.productService.getProducts().subscribe({
        next: (products) => {
          this.productData = products.find((product) => product.id === productId) || null;
          if (this.productData) {
            this.isFormEnabled = true;
            this.productForm.patchValue(this.productData);
            this.enableFormFields();
          } else {
            this.isFormEnabled = false;
            alert('Product not found');
          }
        },
        error: (err) => console.error('Error fetching product:', err),
      });
    }
  }

  enableFormFields() {
    this.productForm.get('name')?.enable();
    this.productForm.get('description')?.enable();
    this.productForm.get('amount')?.enable();
    this.productForm.get('img')?.enable();
    this.productForm.get('price')?.enable();
  }

  updateProduct() {
    if (this.productForm.valid) {
      const updatedProduct: IProduct = this.productForm.value;
      this.productService.updateProduct(updatedProduct).subscribe({
        next: () => {
          alert('Product updated successfully Perritou!');
        },
        error: (err) => {
          console.error('Error updating product:', err);
          alert('Error updating product.');
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
