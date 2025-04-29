import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

export const routes: Routes = [
    {path: '', component: MainBodyComponent},
    {path: 'add-department', component: AddDepartmentComponent},
];
