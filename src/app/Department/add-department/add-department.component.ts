import { Component } from '@angular/core';
import { Department, DepartmentService } from '../department.service';
import { response } from 'express';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  departmentForm: FormGroup;
    /*department : Department={
      name : '',
      description: '',
      createdDate:new Date().toISOString(),
      employees: []
    }*/
    constructor(private departmentService : DepartmentService,private formBuilder: FormBuilder, private router: Router){
      this.departmentForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        createdDate: [new Date().toISOString(), Validators.required],
        employees: []
      });
    }
    onSubmit():void{
      if(this.departmentForm.valid){
       
          const departmentData: Department = this.departmentForm.value;
         // Call the service to send the data to the API
      this.departmentService.addDepartment(departmentData).subscribe({
        next: (response) => {
          console.log('Department added successfully:', response);
          this.router.navigate(['departments']);
        },
        error: (err) => {
          console.error('Error adding department:', err);
        }
      });
      
      
    }
}
// Helper methods for validation checks in the template
get name() {
  return this.departmentForm.get('name');
}

get description() {
  return this.departmentForm.get('description');
}


}
