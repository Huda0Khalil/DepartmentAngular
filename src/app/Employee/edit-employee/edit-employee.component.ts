import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Department, DepartmentService } from '../../Department/department.service';
import { Employee, EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  editEmployeeForm!: FormGroup;
  employeeId!: number;

  employee : Employee[]=[];
  departments: any[] = [];
  name: any;
  email: any;
  phoneNumber: any;
  age: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Get employee ID from route
    this.employeeId = this.route.snapshot.params['Id'];

    // Initialize the form
    this.editEmployeeForm = this.fb.group({
      id: [this.employeeId],
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      email:[null, [Validators.required,Validators.email]],
      phoneNumber:[null, [Validators.required,Validators.pattern('^[+]?[0-9]{10-13}$')]],
      departmentId: [null, Validators.required]
    });

    // Get the departments for the dropdown
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });

    // Load existing employee data
    this.employeeService.getEmployeeById(this.employeeId).subscribe((employee) => {
      console.log("ID="+this.employeeId);
      this.editEmployeeForm.patchValue({
       Id:employee.id,
        name: employee.name,
        age: employee.age,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        departmentId: employee.departmentId
      });
    });
  }
  onSubmit(): void {
    if (this.editEmployeeForm.valid) {
      const employeeData: Employee = this.editEmployeeForm.value;
      this.employeeService.updateEmployee(this.employeeId, employeeData).subscribe(
        (response) => {
          console.log('Employee updated successfully', response);
          this.router.navigate(['/employees']); // Redirect to the employees list
        },
        (error) => {
          console.error('Error updating employee', error);
        }
      );
    }
  }
}
