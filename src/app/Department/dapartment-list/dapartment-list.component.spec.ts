import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentListComponent } from './dapartment-list.component';

describe('DapartmentListComponent', () => {
  let component: DapartmentListComponent;
  let fixture: ComponentFixture<DapartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DapartmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DapartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
