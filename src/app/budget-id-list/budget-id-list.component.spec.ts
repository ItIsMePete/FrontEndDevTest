import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetIdListComponent } from './budget-id-list.component';

describe('BudgetIdListComponent', () => {
  let component: BudgetIdListComponent;
  let fixture: ComponentFixture<BudgetIdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetIdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetIdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
