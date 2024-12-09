import { Component } from '@angular/core';
import { AsideComponent } from '../../aside/aside.component';
import { HeaderComponent } from '../../shared/componets/header/header.component';
import { HomeComponent } from '../home/componets/home/home.component';
import { FooterComponent } from '../../shared/componets/footer/footer.component';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AsideComponent, HeaderComponent, HomeComponent, FooterComponent , CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
 

}
