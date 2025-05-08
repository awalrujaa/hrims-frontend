import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDepartmentsComponent } from './search-departments.component';

describe('SearchDepartmentsComponent', () => {
  let component: SearchDepartmentsComponent;
  let fixture: ComponentFixture<SearchDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
