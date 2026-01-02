import { Component, Input, input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'count-down',
  standalone: false,
  templateUrl: './count-down.html',
  styleUrl: './count-down.scss',
  host: {
    '[style.border]': "'1px solid black'",
    '[style.border-radius]': "'2vh'",
    '[style.padding]': "'1em'",
    '[style.display]': "'grid'",
    '[style.height]': "'fit-content'",
  }
})
export class CountDown implements OnInit, OnDestroy {

  @Input() user!: object
  @Input() startFrom!: number

  currCount = signal(this.startFrom)

  isLow: boolean = false

  private intervalId: number = 0
  // startFrom!: startFrom

  // startFrom = input<number>(0);

  ngOnInit(): void {
    // this.currCount = this.startFrom
    this.intervalId = setInterval(() => {
    //   this.currCount.set()
    //   if (this.currCount < 6) this.isLow = true
    //   if (this.currCount === 0) clearInterval(this.intervalId)

    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }




}
