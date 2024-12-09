import { Component, signal, EventEmitter, Output } from '@angular/core';
 
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starthome',
  standalone: true,
  imports: [CarouselModule, ButtonModule ],
  templateUrl: './starthome.component.html',
  styleUrl: './starthome.component.css'
})
export class StarthomeComponent {
  title = signal('STORE CH')
  slogan = signal( `En "CH", redefinimos la elegancia y la humildad en cada prenda. Nuestra tienda ofrece una selección exclusiva de ropa de alta calidad, diseñada para quienes buscan un estilo sofisticado pero accesible, con un enfoque en la autenticidad y el buen gusto.`)
  images: string[] = [
    'https://picsum.photos/1200/1200?r=43',
    'https://picsum.photos/1200/1200?r=41',
    'https://picsum.photos/1200/1200?r=46'
  ];

  @Output() onComponentSelected = new EventEmitter<string>();

  onSelectComponent(componentName: string){
    this.onComponentSelected.emit(componentName);
  }

  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']); 
  }
}
