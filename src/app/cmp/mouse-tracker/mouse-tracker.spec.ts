import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTracker } from './mouse-tracker';

describe('MouseTracker', () => {
  let component: MouseTracker;
  let fixture: ComponentFixture<MouseTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MouseTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
