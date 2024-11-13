import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsSummaryComponent } from './budgets-summary.component';

describe('BudgetsSummaryComponent', () => {
  let component: BudgetsSummaryComponent;
  let fixture: ComponentFixture<BudgetsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetsSummaryComponent]
    });
    fixture = TestBed.createComponent(BudgetsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
