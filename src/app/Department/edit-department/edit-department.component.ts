import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Department, DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent implements OnInit {
  editDepartmentForm!: FormGroup;
  departmentId!: number;
  departments: Department[]=[];
  name:any;
  description:any;
createdDate: any;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
     // Get department ID from route
     this.departmentId = this.route.snapshot.params['Id'];
      // Initialize the form
    this.editDepartmentForm = this.fb.group({
      id: [this.departmentId],
      name: ['', Validators.required],
      description: [null, Validators.required],
      createdDate:[this.createdDate],
      departmentId: [this.departmentId]
    });
    
    this.departmentService.getDepartmentById(this.departmentId).subscribe((department)=>{
      this.editDepartmentForm.patchValue({
        Id:department.departmentId,
        createdDate:department.createdDate,
          name:department.name,
          description :department.description
      });
    });
    
  }
  onSubmit():void{
    console.log(this.editDepartmentForm);
    if (this.editDepartmentForm.valid) {
      const departmentData: Department = this.editDepartmentForm.value;
      
      this.departmentService.updateDepartment(this.departmentId,departmentData).subscribe(
        (response) => {
          console.log('Employee updated successfully', response);
          this.router.navigate(['/departments']); // Redirect to the employees list
        },
        (error) => {
          console.error('Error updating employee', error);
        }
      );
    }
  }

}
