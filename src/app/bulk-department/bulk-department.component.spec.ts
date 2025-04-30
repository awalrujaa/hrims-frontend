import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDepartmentComponent } from './bulk-department.component';

describe('BulkDepartmentComponent', () => {
  let component: BulkDepartmentComponent;
  let fixture: ComponentFixture<BulkDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
