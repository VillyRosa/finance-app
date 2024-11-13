import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotComponent } from './pot.component';

describe('PotComponent', () => {
  let component: PotComponent;
  let fixture: ComponentFixture<PotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PotComponent]
    });
    fixture = TestBed.createComponent(PotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
