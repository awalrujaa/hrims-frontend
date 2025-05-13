import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../interface/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private credentials = 'admin:password';
  private base64Credentials: string;
  private headers: HttpHeaders;
  private apiUrl = 'http://localhost:8080/api/employees';


  constructor(private http: HttpClient) {
    this.base64Credentials = btoa(this.credentials);
    this.headers = new HttpHeaders({
      Authorization: `Basic ${this.base64Credentials}`
    });
   }

     getEmployeess(): Observable<Employee[]> {
   
       
       return this.http.get<any>(this.apiUrl, { headers: this.headers }).pipe(
         map(response => response.data.data) // Extract the data from the response
       );
       }
}
