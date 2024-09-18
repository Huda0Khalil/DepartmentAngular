import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  private apiUrl = 'https://localhost:44334/api/Department';  // Replace with your API URL

  constructor(private http: HttpClient) 
  { }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
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
  employees: Employee[];
  //employeeCounts: number;
  // Add other properties as per your API response
}

