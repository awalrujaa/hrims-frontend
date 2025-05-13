import { Component, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-bulk-department',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './bulk-department.component.html',
  styleUrl: './bulk-department.component.css'
})

export class BulkDepartmentComponent {
    router = inject(Router);
    selectedFile: File | null = null;
    selectedFileName: string | null = null;
    message: string = '';
    error: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      this.selectedFileName = this.selectedFile.name;
      this.message = '';
      this.error = '';
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.error = 'Please select a file.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:password'),
    });

    this.http
      .post('http://localhost:8080/api/departments/excel-upload', formData, { headers })
      .subscribe({
        next: (res: any) => {
          if (res.code === 200 || res.status === 'OK') {
            
            this.router.navigate(['/admin/department']);
            alert("File uploaded and Created Successfully");
            this.message = 'File uploaded successfully.';
            this.error = '';
          } else {
            this.error = res.errors?.[0] || 'File upload failed.';
            this.message = '';
          }
        },
        error: (err) => {
          this.error =
            err.error?.errors?.[0] || err.message || 'File upload failed due to an unknown error.';
          this.message = '';
        },
      });
  }
}