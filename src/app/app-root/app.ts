import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  startFrom: number = 10

  title = 'My First Angular Project'

  user: object = {
    name: 'dan',
    age: 37
  }

  ngOnInit() {
    console.log(this.title)
  }
}
