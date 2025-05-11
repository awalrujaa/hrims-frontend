import { Routes } from '@angular/router';import { LoginPageComponent } from './components/login-page/login-page.component';
import { authGuard } from './auth/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SecondComponent } from './components/second/second.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeaveComponent } from './components/leave/leave.component';
import { PayrollComponent } from './components/payroll/payroll.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'leave', component: LeaveComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]},
    { path: 'home', component: HomePageComponent, children: [
      { path: 'dashboard', component: SecondComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'main', component: MainBodyComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' }
    ]},
      { path: '**', redirectTo: '/login' }

    // {path: 'add-department', component: AddDepartmentComponent},
    // {path: 'add-bulk-department', component: BulkDepartmentComponent},
    // {path: 'list-departments', component: ListDepartmentsComponent},
    // {path: 'view-department/:id', component: ViewDepartmentComponent},
    // {path: 'update-department/:id', component: UpdateDepartmentComponent},
    // {path: 'search-department', component: SearchDepartmentsComponent},
    
];
