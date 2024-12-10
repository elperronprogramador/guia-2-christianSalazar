import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { IProduct } from '../shared/models/products.models';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    SidebarModule,
    FormsModule,
    ListboxModule,
    CommonModule
  ],

  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  @Output() onComponentSelected = new EventEmitter<string>();

  searchTerm: string = '';  
  searchResults: IProduct[] = []; 

  constructor(private productService: ProductService) {}

  onSelectComponent(componentName: string) {
    this.onComponentSelected.emit(componentName);
  }

  onSearch() {
    if (this.searchTerm.trim() !== '') {
      this.productService.getProduct(this.searchTerm).subscribe({
        next: (results) => {
          this.searchResults = results;
          console.log('Search results:', this.searchResults);
        },
        error: (err) => {
          console.error('Error fetching search results:', err);
        },
      });
    } else {
      this.searchResults = [];
    }
  }
 
}
