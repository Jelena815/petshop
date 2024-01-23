import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibiceComponent } from './ribice.component';

describe('RibiceComponent', () => {
  let component: RibiceComponent;
  let fixture: ComponentFixture<RibiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RibiceComponent]
    });
    fixture = TestBed.createComponent(RibiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
