import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'season-clock',
  standalone: false,
  templateUrl: './season-clock.html',
  styleUrl: './season-clock.scss',
})
export class SeasonClock implements OnInit, OnDestroy {
  title = 'Season Clock'

  now: Date = new Date()
  seasonName: string = ''
  seasonImg: string = ''
  isDark: boolean = false

  private intervalId!: number;


  onToggleDarkMode(ev: MouseEvent) {
    this.isDark = !this.isDark
  }

  geSeasonName() {
    let month = this.now.getMonth()

    if (month >= 2 && month <= 4) {
      this.seasonImg = '🌸'
      return this.seasonName = 'Spring'
    }   // Mar, Apr, May
    if (month >= 5 && month <= 7) {
      this.seasonImg = '🌞'
      return this.seasonName = 'Summer'
    }   // Jun, Jul, Aug
    if (month >= 8 && month <= 10) {
      this.seasonImg = '🍂'
      return this.seasonName = 'Autumn'
    }  // Sep, Oct, Nov
    this.seasonImg = '❄️'
    return this.seasonName = 'winter'
  }


  ngOnInit(): void {
    this.geSeasonName()
    this.intervalId = window.setInterval(() => {
      // this.currTime.set(new Date())
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId!)
  }

}
