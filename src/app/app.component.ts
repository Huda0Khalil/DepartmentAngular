import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'department-app';
//isHandset: any;
  constructor(private router: Router,private breakpointObserver: BreakpointObserver) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result: { matches: any; }) => result.matches)
      );
  }
  goToAddDepartmenttPage() {
    this.router.navigate(['/add-department']);
  }
  
  isHandset: Observable<boolean>;

  
  
}
