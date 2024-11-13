import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollComponent } from './boll.component';

describe('BollComponent', () => {
  let component: BollComponent;
  let fixture: ComponentFixture<BollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BollComponent]
    });
    fixture = TestBed.createComponent(BollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
