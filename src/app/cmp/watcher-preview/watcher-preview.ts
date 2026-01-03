import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'watcher-preview',
  standalone: false,
  templateUrl: './watcher-preview.html',
  styleUrl: './watcher-preview.scss',
})
export class WatcherPreview {

  @Output() RemoveWatcher = new EventEmitter
  @Input() watcher!: Watcher

  onRemoveWatcher(ev: MouseEvent, id:string) {
    ev.stopPropagation()
    this.RemoveWatcher.emit(id)
  }



  // watcher:Watcher ={
  //   _id:'123',
  //   fullname:'dan w',
  //   movies: ['white sand', 'black friday']
  // }
}
