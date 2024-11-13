import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringBillsSummaryComponent } from './recurring-bills-summary.component';

describe('RecurringBillsSummaryComponent', () => {
  let component: RecurringBillsSummaryComponent;
  let fixture: ComponentFixture<RecurringBillsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurringBillsSummaryComponent]
    });
    fixture = TestBed.createComponent(RecurringBillsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
