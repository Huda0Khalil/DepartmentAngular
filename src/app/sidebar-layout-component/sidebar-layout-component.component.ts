import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-layout-component',
  templateUrl: './sidebar-layout-component.component.html',
  styleUrl: './sidebar-layout-component.component.css'
})
export class SidebarLayoutComponent {
  isHandset: Observable<boolean>;

  // The 'breakpointObserver' is now correctly initialized within the constructor
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }
}