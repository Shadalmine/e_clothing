import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})
export class Login {
  showPassword = signal(false);
  email = signal('');
  password = signal('');

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  signIn() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}