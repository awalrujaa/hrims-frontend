import { Routes } from '@angular/router';
// import { AddDepartmentComponent } from './components/add-department/add-department.component';
// import { ListDepartmentsComponent } from './components/list-departments/list-departments.component';
// import { ViewDepartmentComponent } from './components/view-department/view-department.component';
// import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
// import { BulkDepartmentComponent } from './components/bulk-department/bulk-department.component';
// import { SearchDepartmentsComponent } from './components/search-departments/search-departments.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { authGuard } from './auth/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard]},

    // {path: 'add-department', component: AddDepartmentComponent},
    // {path: 'add-bulk-department', component: BulkDepartmentComponent},
    // {path: 'list-departments', component: ListDepartmentsComponent},
    // {path: 'view-department/:id', component: ViewDepartmentComponent},
    // {path: 'update-department/:id', component: UpdateDepartmentComponent},
    // {path: 'search-department', component: SearchDepartmentsComponent},
    
];
