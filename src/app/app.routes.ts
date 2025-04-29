import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';

export const routes: Routes = [
    {path: '', component: ListDepartmentsComponent},
    {path: 'add-department', component: AddDepartmentComponent},
    {path: 'list-departments', component: ListDepartmentsComponent},
];
