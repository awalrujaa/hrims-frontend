import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentSharedService {
  private departmentsSource = new BehaviorSubject<any[]>([]);
  departments$ = this.departmentsSource.asObservable();

  constructor() { }

  updateDepartments(departments: any[]): void {
    this.departmentsSource.next(departments);
  }

}
