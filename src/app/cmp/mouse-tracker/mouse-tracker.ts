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

  isOn: boolean = true
  mouseMoveX!: number
  mouseMoveY!: number

   throttle = (fn:any, delay:number) => {
    let lastTime = 0;
    return (...args:any) => {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        fn(...args);
      }
    };
  }

  onMouseMove = (ev: MouseEvent) => {
    if (!this.isOn) return
    this.mouseMoveX = ev.clientX
    this.mouseMoveY = ev.clientY
  }

  ngOnInit() {
    window.addEventListener('mousemove', this.throttle(this.onMouseMove, 100))
  }
  ngOnDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove)
  }
}
