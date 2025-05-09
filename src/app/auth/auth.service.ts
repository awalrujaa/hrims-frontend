import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private httpClient: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.httpClient.post<{ token: string }>(`${this.baseUrl}/login`, data)
      .pipe(tap((result) => localStorage.setItem('token', result.token)));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}