import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DapartmentListComponent } from './Department/dapartment-list/dapartment-list.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';

import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';

const appRoutes: Routes = [
  { path: 'departments', component: DapartmentListComponent},
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:Id', component: EditEmployeeComponent },
 { path: 'edit-department/:Id', component: EditDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
