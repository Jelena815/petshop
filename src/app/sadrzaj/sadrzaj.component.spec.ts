import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadrzajComponent } from './sadrzaj.component';

describe('SadrzajComponent', () => {
  let component: SadrzajComponent;
  let fixture: ComponentFixture<SadrzajComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadrzajComponent]
    });
    fixture = TestBed.createComponent(SadrzajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
