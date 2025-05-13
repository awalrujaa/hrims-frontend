import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] // Fixed: styleUrl -> styleUrls
})
export class LoginPageComponent {
  // authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as { email: string; password: string };

      // Hardcoded credentials
      const hardcodedEmail = 'admin@example.com';
      const hardcodedPassword = 'admin123';

      if (email === hardcodedEmail && password === hardcodedPassword) {
        // Navigate to admin page on successful login
        this.router.navigate(['/admin']);
      } else {
        alert('Login failed.');
      }
    }
  }
}