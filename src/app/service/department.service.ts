// import { inject, Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { map, Observable } from 'rxjs';
// import { Department } from '../department.model';
// import { HttpClientModule } from '@angular/common/http';
// import { CreateDepartmentResponse } from '../interface/department-interface';


// @Injectable({
//   providedIn: 'root'
// })

// export class DepartmentService {
//   // searchText: string = '';
//   private credentials = 'admin:password';
//   private base64Credentials: string;
//   private headers: HttpHeaders;
//   private apiUrl = 'http://localhost:8080/api/departments';


//   constructor(private http: HttpClient) {
//     this.base64Credentials = btoa(this.credentials);
//     this.headers = new HttpHeaders({
//       Authorization: `Basic ${this.base64Credentials}`
//     });
//    }

//   getDepartments(): Observable<Department[]> {

    
//     return this.http.get<any>(this.apiUrl, { headers: this.headers }).pipe(
//       map(response => response.data.data) // Extract the data from the response
//     );
//     }

//     createDepartment(department: Department): Observable<CreateDepartmentResponse> {
   
//       return this.http.post<CreateDepartmentResponse>(this.apiUrl, department, { headers: this.headers });
//     }

//     getDepartmentById(id: number): Observable<any> {

//       return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.headers }).pipe(
//         map(response => response.data) // Extract the data from the response
//       );
//     }
  
//     updateDepartment(id: number, department: Department): Observable<Object> {
  
//       return this.http.put<any>(`${this.apiUrl}/${id}`, department, { headers: this.headers });
//     }
  
//     deleteDepartment(id: number): Observable<any> {

//       return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.headers });
//   }

//   filterDepartments(searchText: string): Observable<any> {

//       return this.http.get<any>(`${this.apiUrl}/filter?searchText=${searchText}`, { headers: this.headers }).pipe(
//         map(response => response.data) // Extract the data from the response
//       );
//   }


// }
