import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../shared/models/user.models';

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

  users: IUser[] = [];  

  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      code: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchUsers();  
  }

  checkPermission(): void {
    const enteredCode = this.form.get('code')?.value;
    this.permissionGranted = enteredCode === this.permissionCode;
    if (!this.permissionGranted) {
      alert('Incorrect code! Please try again.');
    }
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        alert('Failed to load users. Please try again later.');
      },
    });
  }
}
