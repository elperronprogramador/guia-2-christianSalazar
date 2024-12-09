import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-consultar-producto',
  standalone: true,
  imports: [CardModule, FormsModule, ButtonModule],
  templateUrl: './consultar-producto.component.html',
  styleUrl: './consultar-producto.component.css'
})
export class ConsultarProductoComponent {

}
