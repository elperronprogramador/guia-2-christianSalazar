import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    PasswordModule,
    FloatLabelModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    InputGroupAddonModule,
    InputGroupModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  value: string = ''; // Inicializa como cadena vacía
  sizeInputs = { width: '280px', height: '30px', fontSize: '14px' };
}
