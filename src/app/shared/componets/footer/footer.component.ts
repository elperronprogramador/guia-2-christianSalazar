import { Component, signal } from '@angular/core';
 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  title = signal('Transformando el desarrollo web')
  context=signal( `componentes, TypeScript y arquitectura robusta,
    >© 2024 WebDevelopers. Todos los derechos reservados.`)
}
