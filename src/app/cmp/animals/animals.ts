import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'animals',
  standalone: false,
  templateUrl: './animals.html',
  styleUrl: './animals.scss',
})
export class Animals {
  title = 'My Animals Container'



  animalInfos: Animal[] = [
    { type: 'Malayan Tiger', count: 787, },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 }
  ]
  
}
