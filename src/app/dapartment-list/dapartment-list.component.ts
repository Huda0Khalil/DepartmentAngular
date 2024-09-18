import { Component, OnInit } from '@angular/core';
import { DepartmentService, Department } from '../department.service';

@Component({
  selector: 'dapartment-list-app',
  templateUrl: './dapartment-list.component.html',
  styleUrl: './dapartment-list.component.css'
})
export class DapartmentListComponent implements OnInit {
  departments: Department[] = [];
  //employeeCounts : number[] = [];

  constructor(private departmentService: DepartmentService) { }

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
}
