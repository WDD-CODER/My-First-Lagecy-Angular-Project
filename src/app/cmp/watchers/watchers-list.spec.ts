import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchersList } from './watchers-list';

describe('Watchers', () => {
  let component: WatchersList;
  let fixture: ComponentFixture<WatchersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
