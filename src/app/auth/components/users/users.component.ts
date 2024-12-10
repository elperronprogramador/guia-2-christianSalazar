import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, TableModule, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  permissionCode = 'admin123';
  permissionGranted = false;

  users: { id: number; name: string; email: string }[] = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      code: ['', Validators.required]
    });
  }

  checkPermission() {
    const enteredCode = this.form.get('code')?.value;
    this.permissionGranted = enteredCode === this.permissionCode;
    if (!this.permissionGranted) {
      alert('Incorrect code! Please try again.');
    }
  }
}
