import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaglavljeComponent } from './zaglavlje.component';

describe('ZaglavljeComponent', () => {
  let component: ZaglavljeComponent;
  let fixture: ComponentFixture<ZaglavljeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZaglavljeComponent]
    });
    fixture = TestBed.createComponent(ZaglavljeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
