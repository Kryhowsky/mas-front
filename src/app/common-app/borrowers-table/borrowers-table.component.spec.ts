import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowersTableComponent } from './borrowers-table.component';

describe('BorrowersTableComponent', () => {
  let component: BorrowersTableComponent;
  let fixture: ComponentFixture<BorrowersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
