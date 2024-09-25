import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutComponentComponent } from './sidebar-layout-component.component';

describe('SidebarLayoutComponentComponent', () => {
  let component: SidebarLayoutComponentComponent;
  let fixture: ComponentFixture<SidebarLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLayoutComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
