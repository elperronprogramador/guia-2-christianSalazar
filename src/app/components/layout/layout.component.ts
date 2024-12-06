import { Component } from '@angular/core';
import { AsideComponent } from '../../aside/aside.component';
import { HeaderComponent } from '../../shared/componets/header/header.component';
import { HomeComponent } from '../home/componets/home/home.component';
import { FooterComponent } from '../../shared/componets/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AsideComponent, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
