import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DapartmentListComponent } from './Department/dapartment-list/dapartment-list.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';

import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';  // Guard to protect routes

const appRoutes: Routes = [
  {path:'logIn', component: LoginComponent},
  { path: 'departments', component: DapartmentListComponent,canActivate: [AuthGuard]},
  { path: 'add-department', component: AddDepartmentComponent,canActivate: [AuthGuard] },
  { path: 'employees', component: EmployeeListComponent ,canActivate: [AuthGuard]},
  { path: 'add-employee', component: AddEmployeeComponent ,canActivate: [AuthGuard]},
  { path: 'edit-employee/:Id', component: EditEmployeeComponent ,canActivate: [AuthGuard] },
 { path: 'edit-department/:Id', component: EditDepartmentComponent,canActivate: [AuthGuard] },
 { path: 'show-department/:Id', component: DepartmentDetailsComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
