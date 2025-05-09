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
import { HomePageComponent } from './components/home-page/home-page.component';
import { SecondComponent } from './components/second/second.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainBodyComponent } from './components/main-body/main-body.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
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
