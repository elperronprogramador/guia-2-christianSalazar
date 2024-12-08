import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}