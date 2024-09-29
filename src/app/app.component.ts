import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;
  title = 'department-app';
//isHandset: any;
  constructor(private authService: AuthService,private router: Router,private breakpointObserver: BreakpointObserver) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result: { matches: any; }) => result.matches)
      );
  }
  goToAddDepartmenttPage() {
    this.router.navigate(['/add-department']);
  }
  onLogout():boolean {
    
    this.authService.Logout();
    this.router.navigate(['/logIn']);
    return true;
  }
  isLoggedIn(): boolean {
    return this.authService.IsLoggedIn();
  }
  isHandset: Observable<boolean>;

  
  
}
