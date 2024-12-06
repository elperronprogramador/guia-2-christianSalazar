import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/products.models';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CardModule, ButtonModule, ToastModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css',
})
export class OfertasComponent {
  @Input({ required: true }) product!: Product;
}
