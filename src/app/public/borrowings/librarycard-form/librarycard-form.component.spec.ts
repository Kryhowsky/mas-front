import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarycardFormComponent } from './librarycard-form.component';

describe('LibrarycardFormComponent', () => {
  let component: LibrarycardFormComponent;
  let fixture: ComponentFixture<LibrarycardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarycardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarycardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
