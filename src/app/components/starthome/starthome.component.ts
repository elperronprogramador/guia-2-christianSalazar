import { Component, signal } from '@angular/core';
 
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

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
}
