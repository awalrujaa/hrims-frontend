import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Department } from './department.model';
import { HttpClientModule } from '@angular/common/http';


interface CreateDepartmentResponse {
  code: number;
  status: string;
  message: string;
  data: Department;
  errors: any[];
}

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

    createDepartment(department: Department): Observable<CreateDepartmentResponse> {
      const credentials = 'admin:password';
      const base64Credentials = btoa(credentials); // Encode to Base64
      
      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + base64Credentials, // Add Basic Auth header
      });
  
      return this.http.post<CreateDepartmentResponse>(this.apiUrl, department, { headers });
    }

    getDepartmentById(id: number): Observable<any> {
      const credentials = 'admin:password';
      const base64Credentials = btoa(credentials); // Encode to Base64
      
      // Set the Authorization header
      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + base64Credentials, // Add Basic Auth header
      });

      return this.http.get<any>(`${this.apiUrl}/${id}`, { headers }).pipe(
        map(response => response.data) // Extract the data from the response
      );
    }
  
    updateDepartment(id: number, department: Department): Observable<Object> {
      const credentials = 'admin:password';
      const base64Credentials = btoa(credentials); // Encode to Base64
      
      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + base64Credentials, // Add Basic Auth header
      });
  
      return this.http.put<any>(`${this.apiUrl}/${id}`, department, { headers });
    }
  
    deleteDepartment(id: number): Observable<any> {
      const credentials = 'admin:password';
      const base64Credentials = btoa(credentials); // Encode to Base64
      
      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + base64Credentials, // Add Basic Auth header
      });

      return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }


}
