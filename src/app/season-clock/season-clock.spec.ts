import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonClock } from './season-clock';

describe('SeasonClock', () => {
  let component: SeasonClock;
  let fixture: ComponentFixture<SeasonClock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonClock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonClock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
