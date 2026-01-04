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

  selectedWatcher: Watcher | null = null
  emptyWatcher: Watcher | null = null
  movieInput: string = '';
  isLoading: boolean = false

  onSaveWatcher(ev: SubmitEvent, elInput: HTMLInputElement, elMoviesInput: HTMLInputElement): void {
    var newMovies: string[] = elMoviesInput.value.split(',').map(movie => movie.trim())
    newMovies.forEach(m => this.emptyWatcher?.movies.push(m))

    if (this.emptyWatcher && elInput.value && this.emptyWatcher.movies[0] !== '') {
      this.emptyWatcher.fullname = elInput.value
      this.emptyWatcher._id = this.makeId()
      this.watchers.push(this.emptyWatcher)
      this.movieInput = ''
      this.isLoading = true
      this.closeDialog()
      setTimeout(() => {
        this.isLoading = false
      }, 1500);
    }
    else {
      alert('Missing Info, Watcher Not Saved')
      this.movieInput = ''
      this.closeDialog()
    }
  }

  onSelectWatcher(watcher: Watcher): void {
    this.selectedWatcher = watcher
    this.dialogRef.nativeElement.showModal()
  }

  onCloseDialog(ev: MouseEvent): void {
    ev.stopPropagation()
    this.closeDialog()
  }

  closeDialog(): void {
    this.selectedWatcher = null
    this.emptyWatcher = null
    this.dialogRef.nativeElement.close()
  }
  onAddWatcher(ev: MouseEvent): void {
    var newWatcher: Watcher = { _id: this.makeId(), fullname: '', movies: [] }
    this.emptyWatcher = newWatcher
    this.dialogRef.nativeElement.showModal()
  }

  RemoveWatcher(id: string): void {
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
