import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { Department, DepartmentService } from '../../Department/department.service';
import { response } from 'express';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm :FormGroup;
  departments: Department[]=[];
  constructor(private employeeService:EmployeeService, private departmentService:DepartmentService,private formBuilder: FormBuilder, private router: Router){
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      age:['',[Validators.required, Validators.min(18)]],
     departmentId:['',Validators.required]
    });
    this.loadDepartments();
  }
  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data: Department[]) => {
        this.departments = data;  // Assign the fetched departments to the array
        console.log('Departments loaded successfully:', data);
      },
      error: (error) => console.error('Error loading departments:', error)
    });
  }

  onSubmit() : void{
    if(this.employeeForm.valid){
      const employeeData : Employee = this.employeeForm.value;
      this.employeeService.addEmployee(employeeData).subscribe({
        next:(response)=>{
          console.log('Employee added successfully:', response);
          this.router.navigate(['employees']);
        },
        error: (err) => {
          console.error('Error adding department:', err);
        }
      })
    }
  }
  // Helper methods for validation checks in the template
get name() {
  return this.employeeForm.get('name');
}

get email() {
  return this.employeeForm.get('email');
}
get phoneNumber() {
  return this.employeeForm.get('phoneNumber');
}
get age() {
  return this.employeeForm.get('age');
}
get departmentId() {
  return this.employeeForm.get('departmentId');
}
  
  
  
  
}


