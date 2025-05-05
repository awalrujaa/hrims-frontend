import { Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { BulkDepartmentComponent } from './bulk-department/bulk-department.component';

export const routes: Routes = [
    {path: '', component: ListDepartmentsComponent},
    {path: 'add-department', component: AddDepartmentComponent},
    {path: 'add-bulk-department', component: BulkDepartmentComponent},
    {path: 'list-departments', component: ListDepartmentsComponent},
    {path: 'view-department/:id', component: ViewDepartmentComponent},
    {path: 'update-department/:id', component: UpdateDepartmentComponent},    

];
