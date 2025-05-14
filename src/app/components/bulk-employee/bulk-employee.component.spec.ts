import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEmployeeComponent } from './bulk-employee.component';

describe('BulkEmployeeComponent', () => {
  let component: BulkEmployeeComponent;
  let fixture: ComponentFixture<BulkEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
