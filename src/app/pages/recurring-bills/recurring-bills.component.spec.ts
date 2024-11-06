import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringBillsComponent } from './recurring-bills.component';

describe('RecurringBillsComponent', () => {
  let component: RecurringBillsComponent;
  let fixture: ComponentFixture<RecurringBillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurringBillsComponent]
    });
    fixture = TestBed.createComponent(RecurringBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
