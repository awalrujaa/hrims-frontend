import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Department } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/departments';

  constructor() { }

  getDepartments(): Observable<Department[]> {
    const credentials = 'admin:password';
    const base64Credentials = btoa(credentials); // Encode to Base64
    
    // Set the Authorization header
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credentials, // Add Basic Auth header
    });
    
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(response => response.data.data) // Extract the data from the response
    );
    }
}
