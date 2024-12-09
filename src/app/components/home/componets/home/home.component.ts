import { Component, OnInit, signal  } from '@angular/core';
import { IProduct  } from '../../../../shared/models/products.models';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from '../../../ofertas/ofertas.component';
import { ProductService } from '../../../../services/product.service';
 
 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OfertasComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit  {

  products = signal<IProduct[]>([]);
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void{
    this.productService.getProducts().subscribe(
      {
        next: (data) => this.products.set(data),
        error: (err) => console.error('error', err),
      }
    )
  }


    // constructor() {
    //   const initProducts: IProduct[] = [
    //     {
    //       id: Date.now(),
    //       name: 'zapatosss',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=43',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro2',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=53',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro3',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=41',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro4',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=41',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro5',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=41',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro6',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=41',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro7',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=41',
    //     },
    //     {
    //       id: Date.now(),
    //       name: 'pro8',
    //       description: 'hola como estas',
    //       price: 2300,
    //       amount: 14,
    //       img: 'https://picsum.photos/200/200?r=41',
    //     },
    //   ];
    //   this.products.set(initProducts);
    // }
 
}
