import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-tracker',
  standalone: false,
  templateUrl: './mouse-tracker.html',
  styleUrl: './mouse-tracker.scss',
})
export class MouseTracker implements OnInit, OnDestroy {

  OnSelectMouseState(ev: MouseEvent) {
    this.isOn = !this.isOn
  }

  cords = {
    x: 0,
    y: 0
  }

  isOn: boolean = true

  throttle = (fn: any, delay: number) => {
    let lastTime = 0;
    return (...args: any) => {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        fn(...args);
      }
    };
  }

  onMouseMove = ({ x, y }: MouseEvent) => {
    if (!this.isOn) return
    this.cords.x = x
    this.cords.y = y
  }

  ngOnInit() {
    window.addEventListener('mousemove', this.throttle(this.onMouseMove, 100))
  }
  ngOnDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove)
  }
}
