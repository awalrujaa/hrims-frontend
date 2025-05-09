import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] // Fixed: styleUrl -> styleUrls
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      // Cast value since Validators.required ensures non-null
      const loginData = this.loginForm.value as { email: string; password: string };
      this.authService.login(loginData).subscribe({
        next: () => this.router.navigate(['/admin']),
        error: () => alert('Login failed. Please check your credentials.')
      });
    }
  }
}