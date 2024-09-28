import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Department, DepartmentService } from '../department.service';
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  department:Department;
  constructor(private departmentService: DepartmentService,private route: ActivatedRoute,
    private router: Router){}
    ngOnInit(){
      const departmentId = this.route.snapshot.paramMap.get('Id');
      this.departmentService.getDepartmentById(parseInt(departmentId)).subscribe(data=>{
        
        this.department= data;
      });
    }
}
