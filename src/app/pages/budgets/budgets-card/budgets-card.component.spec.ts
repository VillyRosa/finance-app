import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsCardComponent } from './budgets-card.component';

describe('BudgetsCardComponent', () => {
  let component: BudgetsCardComponent;
  let fixture: ComponentFixture<BudgetsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetsCardComponent]
    });
    fixture = TestBed.createComponent(BudgetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
