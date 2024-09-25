import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Department } from '../Department/department.service';
import { environment } from '../../enviroments/environments';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { }
  // GET: Fetch all departments from the API
    getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiBaseUrl}${environment.employeeApiUrl}/GetAllEmployees`);
    }
    // Get employee by ID
  getEmployeeById(Id: number): Observable<Employee> {
    return this.http.get<Employee>(`${environment.apiBaseUrl}${environment.employeeApiUrl}/GetEmployeeById/`+ Id);
  
  }
  // Update employee
  updateEmployee(id: number, employeeData: Employee): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}${environment.employeeApiUrl}/UpdateEmployee?id=${id}`, employeeData);
  }
  // POST: Add employee

  addEmployee(employee:Employee): Observable<Employee>{
    return this.http.post<Employee>(`${environment.apiBaseUrl}${environment.employeeApiUrl}/AddEmployee`,employee);

  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete<number>(`${environment.apiBaseUrl}${environment.employeeApiUrl}?id=${id}`);
  }
}
export interface Employee {
  id: number;
  name: string;
  email: string;
  phoneNumber : string;
  age: number;
  departmentId : number;
  department? : Department;
}
