import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// Retrieve the token from localStorage
const token = localStorage.getItem('jwtToken');

// Clone the request and set the new header
if (token) {
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`  // Add the token to the Authorization header
    }
  });
}
return next.handle(req);
  }
  
}
