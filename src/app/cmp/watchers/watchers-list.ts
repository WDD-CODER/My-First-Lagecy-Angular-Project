import { Component, ElementRef, ViewChild } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'watcher-list',
  standalone: false,
  templateUrl: './watchers-list.html',
  styleUrl: './watchers-list.scss',
})
export class WatchersList {



  @ViewChild('watcherDialog') dialogRef!: ElementRef<HTMLDialogElement>;

  selectedWatcher!: Watcher | null
  emptyWatcher!: Watcher | null
  movieInput: string = '';

  onSaveWatcher(ev: MouseEvent): void {
    var newMovies: string[] = this.movieInput.split(',').map(movie => movie.trim())
    newMovies.forEach(m => this.emptyWatcher?.movies.push(m))
    if (this.emptyWatcher?.fullname && this.emptyWatcher.movies[0] !== '') {
      this.emptyWatcher._id = this.makeId()
      this.watchers.push(this.emptyWatcher)
      this.movieInput = ''
      this.closeDialog()
    }
    else {
      alert('Missing Info, Watcher Not Saved')
      this.movieInput = ''
      this.closeDialog()
    }
  }

  onSelectWatcher(ev: MouseEvent, watcher: Watcher) {
    ev.stopPropagation()
    this.selectedWatcher = watcher
    this.dialogRef.nativeElement.showModal()
  }

  onCloseDialog(ev: MouseEvent) {
    this.closeDialog()
  }

  closeDialog() {
    this.selectedWatcher = null
    this.emptyWatcher = null
    this.dialogRef.nativeElement.close()
  }
  onAddWatcher(ev: MouseEvent) {
    var newWatcher: Watcher = { _id: this.makeId(), fullname: '', movies: [] }
    this.emptyWatcher = newWatcher
    this.dialogRef.nativeElement.showModal()
  }

  RemoveWatcher(id: string) {
    this.watchers = this.watchers.filter(w => w._id !== id)
  }

  makeId = (length = 3) => {
    return Math.random().toString(36).substring(2, 2 + length)
  }

  watchers: Watcher[] = [
    { _id: '123', fullname: 'dan w', movies: ['white sand', 'black friday'] },
    { _id: '234', fullname: 'adi d', movies: ['holy moly', 'baked cakes'] },
    { _id: '345', fullname: 'david y', movies: ['sunday spirits', 'last call'] },
  ]


}
