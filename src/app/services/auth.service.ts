import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApiUrl= environment.apiBaseUrl+environment.loginApi;
  constructor(private http:HttpClient) { }
  login(loginData:{username:string,password:string}):Observable<string>{

    
    return this.http.post<any>(`${this.loginApiUrl}`, loginData).pipe(
      tap(response =>{
        const token = response.token;
        localStorage.setItem('jwtToken',token);
        const expireDate = response.expiration;
        localStorage.setItem('Expiration',expireDate);
        return response;
      } )  
    );
  }
  IsLoggedIn():boolean{
    
    const token = localStorage.getItem('jwtToken');
    const expireDate = localStorage.getItem('Expiration');
    if (token && expireDate) {
      const now = new Date();
      const tokenExpiryDate = new Date(expireDate);
      return now < tokenExpiryDate;}

    return false;
  }
  Logout(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('Expiration');
  }
}
