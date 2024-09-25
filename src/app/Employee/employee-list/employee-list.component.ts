import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Employee, EmployeeService } from '../employee.service';
import { Department } from '../../Department/department.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees : Employee[] = [];
//dt: any;
filterValue: any;
  //router: any;
  constructor( private dialog: MatDialog,private router: Router, private employeeService: EmployeeService){}
  ngOnInit(): void {
   this.employeeService.getEmployees().subscribe(data => {
    this.employees = data;
   });
  }
  filterGlobal(event: Event, dt: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    dt.filterGlobal(inputValue, 'contains');
  }
  onEdit(employeeId: number): void {
    // Navigate to the edit-employee page with the employee ID
    this.router.navigate(['/edit-employee', employeeId]);
  }
  confirmDelete(employeeId:number):void{
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteEmployee(employeeId);  // If confirmed, delete the department
        
      }
    });
  }
  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        this.employees = this.employees.filter(d => d.id !== employeeId);
        //this.router.navigate(['/employees']); // Redirect to the employees list

        console.log(`Employee with ID ${employeeId} deleted`);
      },
      error => {
        console.error('Error deleting employee:', error);
      }
    );
  }
  

}
