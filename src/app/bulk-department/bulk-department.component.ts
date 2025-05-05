import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bulk-department',
  imports: [CommonModule],
  templateUrl: './bulk-department.component.html',
  styleUrl: './bulk-department.component.css'
})
export class BulkDepartmentComponent {

  message: string = '';
  error: string = '';

  selectedFile: File | null = null;
  constructor(private http: HttpClient) {}


onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
    }
}

uploadFile(): void {
  if (!this.selectedFile) {
    this.error = 'Please select a file before uploading.';
      return;
  }

  const formData = new FormData();
  formData.append('file', this.selectedFile);

  const credentials = 'admin:password';
  const base64Credentials = btoa(credentials); // Encode to Base64
  
  const headers = new HttpHeaders({
    'Authorization': 'Basic ' + base64Credentials, // Add Basic Auth header
  });

  this.http.post('http://localhost:8080/api/departments/excel-upload', formData, { headers })
  .subscribe({
    next: (response) => {
      this.message = 'File uploaded successfully.';
      this.error = '';
      console.log('Upload success:', response);
    },
    error: (err) => {
      this.error = 'File upload failed.';
      this.message = '';
      console.error('Upload error:', err);
    }
  });
}
}
