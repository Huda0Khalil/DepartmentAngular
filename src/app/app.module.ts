import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { Router ,RouterModule,  Routes } from '@angular/router';
import path from 'path';
import { DapartmentListComponent } from './Department/dapartment-list/dapartment-list.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { SidebarLayoutComponent } from './sidebar-layout-component/sidebar-layout-component.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

/*const routes : Routes = [
  {path: 'departments', component: DapartmentListComponent},
  { path: 'add-department', component: AddDepartmentComponent}
];
*/
@NgModule({
  declarations: [
    AppComponent,
    DapartmentListComponent,
    AddDepartmentComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    SidebarLayoutComponent,
    EditEmployeeComponent,
    EditDepartmentComponent,
    ConfirmationDialogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule ,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    
    TableModule,HttpClientModule, 
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
