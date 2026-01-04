import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  OnRestartCount(msg: string) {    
    this.showCountMsg = ''
  }

  onShowCountIsDone(msg: string) {
    this.showCountMsg = msg
  }

  showCountMsg: string = ''
  startFrom: number = 5

  title = 'My First Angular Project'

  ngOnInit() {
    console.log(this.title)
  }
}
