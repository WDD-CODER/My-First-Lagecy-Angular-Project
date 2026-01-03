import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherPreview } from './watcher-preview';

describe('WatcherPreview', () => {
  let component: WatcherPreview;
  let fixture: ComponentFixture<WatcherPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatcherPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatcherPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
