import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:8080/api/auth';

  constructor() { }

  login(data: any) {
    return this.httpClient.post<{ token: string }>(`${this.baseUrl}/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('token', result.token);
      }));
  }

  logout() {
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') != null;
  }
}
