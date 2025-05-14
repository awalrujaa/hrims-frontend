import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateEmployeeResponse, Employee } from '../interface/employee-interface';

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
      map(response => response.data.data)
    );
  }
  
  createEmployee(employee: Employee): Observable<CreateEmployeeResponse> {
    return this.http.post<CreateEmployeeResponse>(this.apiUrl, employee, { headers: this.headers });

  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }
       
        //    getDepartmentById(id: number): Observable<any> {
       
        //      return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.headers }).pipe(
        //        map(response => response.data) // Extract the data from the response
        //      );
        //    }
         
        //    updateDepartment(id: number, department: Department): Observable<Object> {
         
        //      return this.http.put<any>(`${this.apiUrl}/${id}`, department, { headers: this.headers });
        //    }
         
        //    deleteDepartment(id: number): Observable<any> {
       
        //      return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.headers });
        //  }
       
        //  filterDepartments(searchText: string): Observable<any> {
       
        //      return this.http.get<any>(`${this.apiUrl}/filter?searchText=${searchText}`, { headers: this.headers }).pipe(
        //        map(response => response.data) // Extract the data from the response
        //      );
        //  }
       
       
       }
      
