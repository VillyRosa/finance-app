import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringBillsTotalCardComponent } from './recurring-bills-total-card.component';

describe('RecurringBillsTotalCardComponent', () => {
  let component: RecurringBillsTotalCardComponent;
  let fixture: ComponentFixture<RecurringBillsTotalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurringBillsTotalCardComponent]
    });
    fixture = TestBed.createComponent(RecurringBillsTotalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
