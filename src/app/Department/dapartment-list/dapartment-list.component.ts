import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

import { DepartmentService, Department } from '../department.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dapartment-list-app',
  templateUrl: './dapartment-list.component.html',
  styleUrl: './dapartment-list.component.css'
})
export class DapartmentListComponent implements OnInit {
  departments: Department[] = [];
  
  //employeeCounts : number[] = [];

  constructor(private dialog: MatDialog,private departmentService: DepartmentService, private router:Router) { }

  ngOnInit(): void {
    
    this.departmentService.getDepartments().subscribe(data => {
      console.log(data); // Check the API response

      this.departments = data;
     // this.employeeCounts = data.map(department => department.employees.length);
      console.log("departments:");
      console.log(this.departments);
     // console.log("emplyees:");
      //console.log(this.employeeCounts);
    });
  }
  filterGlobal(event: Event, dt: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    dt.filterGlobal(inputValue, 'contains');
  }
  onEdit(departmentId: number): void {
    console.log(departmentId);  // Add this to check the value
    if (departmentId) {
      this.router.navigate(['/edit-department', departmentId]);
    } else {
      console.error('Department ID is undefined or null.');
    }
  }
  confirmDelete( departmentId: number,name:string,type:string='Department'): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { name:name, type: type }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteDepartment(departmentId,name);  // If confirmed, delete the department
      }
    });
  }
  ShowDetails(departmentId:number){
    if(departmentId){
      this.router.navigate(['/show-department', departmentId]);

    }
  }
  deleteDepartment(departmentId:number, name:string):void{
      this.departmentService.deleteDepartment(departmentId).subscribe(
        ()=>{
          this.departments = this.departments.filter(d => d.departmentId != departmentId);
          console.log(`Department with ID ${departmentId} deleted`);

        }
        ,
      error => {
        console.error('Error deleting department:', error);
      }
      )
  }
  
    
}
