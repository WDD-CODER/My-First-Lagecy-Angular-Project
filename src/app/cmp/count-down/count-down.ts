import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';

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

  PauseCount(ev: MouseEvent) {
    this.countState = !this.countState
    console.log("🚀 ~ CountDown ~ PauseCount ~ this.countState:", this.countState)
    if (!this.countState) return this.startCountDown()
    else if (this.countState) clearInterval(this.intervalId)
  }

  restartCount(ev: MouseEvent) {
    clearInterval(this.intervalId)
    if (this.startFrom) this.currCount = this.startFrom
    this.startCountDown()
    this.CountRestart.emit('Restarting Count')
  }

  @Input() startFrom!: number
  @Input() showCountMsg!: string

  @Output() CountRestart = new EventEmitter
  @Output() CountDone = new EventEmitter

  countState: boolean = false

  currCount: number = 2
  isLow: boolean = false

  private intervalId: number = 0

  ngOnInit(): void {
    if (this.startFrom) this.currCount = this.startFrom
    this.startCountDown()
  }
  primeAudio() {
    // Just playing a silent, empty buffer "unlocks" the browser's audio state
    const audio = new Audio();
    audio.play().catch(() => { });
  }
  
  playSound() {
    const audio = new Audio('/success-340660.mp3')
    audio.play()
  }

  onCountDone() {
    this.playSound()
    this.countState = false
    this.CountDone.emit('Count Is Done Yoo !!')
  }

  startCountDown() {
    // if (this.startFrom) this.currCount = this.startFrom
    this.countState = false
    this.intervalId = setInterval(() => {
      this.primeAudio()
      this.currCount--
      if (this.currCount <= 6) this.isLow = true
      if (this.currCount <= 0) {
        this.onCountDone()
        clearInterval(this.intervalId)
      }

    }, 1000);
  }

  ngOnDestroy(): void {

    clearInterval(this.intervalId)
  }




}
