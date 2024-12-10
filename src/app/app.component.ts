import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { IProduct } from './shared/models/products.models';
import { ProductService } from './services/product.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
