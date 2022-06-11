import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsOvertimeComponent } from './borrowings-overtime.component';

describe('BorrowingsOvertimeComponent', () => {
  let component: BorrowingsOvertimeComponent;
  let fixture: ComponentFixture<BorrowingsOvertimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsOvertimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
