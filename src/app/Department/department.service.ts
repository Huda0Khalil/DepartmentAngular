import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { environment } from '../../enviroments/environments';

import { catchError } from 'rxjs/operators';
//import { Environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  
   constructor(private http: HttpClient) 
  { }
  
      // Replace with your API URL
  
   // GET: Fetch all departments from the API
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${environment.apiBaseUrl}${environment.departmentApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }
  //Post: add department
   addDepartment(department:Department):Observable<Department>{
    return this.http.post<Department>(`${environment.apiBaseUrl}${environment.departmentApiUrl}`,department);
   }
   getDepartmentById(Id: number): Observable<Department> {
    return this.http.get<Department>(`${environment.apiBaseUrl}${environment.departmentApiUrl}/GetDepartmentById`,{params:{Id: Id}});
  
  }
  updateDepartment(id:number, departmentData:Department ):Observable<any>{
    return this.http.put<Department>(`${environment.apiBaseUrl}${environment.departmentApiUrl}/UpdateDepartment?id=${id}`,departmentData);
  }
  deleteDepartment(id:number):Observable<any>{
    return this.http.delete<Department>(`${environment.apiBaseUrl}${environment.departmentApiUrl}`,{params:{id:id}});
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    
    if (error.error instanceof Error) {
      // Client-side error (network failure, etc.)
      errorMessage = `Client-side error: ${error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  
}
export interface Employee {
  id: number;
  name: string;
}
export interface Department {
  departmentId: number;
  name: string;
  description:string;
  createdDate:string ;
  employees?: Employee[];
  //employeeCounts: number;
  // Add other properties as per your API response
}


