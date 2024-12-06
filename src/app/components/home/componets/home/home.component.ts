import { Component, signal } from '@angular/core';
import { Product } from '../../../../shared/models/products.models';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from '../../../ofertas/ofertas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OfertasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        titulo: 'zapatosss',
        description: 'hola como estas',
        img: 'https://picsum.photos/200/200?r=43',
      },
      {
        id: Date.now(),
        titulo: 'pro2',
        description: 'hola como estas',
        img: 'https://picsum.photos/200/200?r=53',
      },
      {
        id: Date.now(),
        titulo: 'pro3',
        description: 'hola como estas',
        img: 'https://picsum.photos/200/200?r=41',
      },
      {
        id: Date.now(),
        titulo: 'pro3',
        description: 'hola como estas',
        img: 'https://picsum.photos/200/200?r=41',
      },
      {
        id: Date.now(),
        titulo: 'pro3',
        description: 'hola como estas',
        img: 'https://picsum.photos/200/200?r=41',
      },
    ];
    this.products.set(initProducts);
  }
  products = signal<Product[]>([]);
}
