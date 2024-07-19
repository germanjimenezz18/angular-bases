import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'SpiderMan',
    'IronMan',
    'Hulk',
    'Thor',
    'Black Widow',
    'Captain America',
    'Black Panther',
    'Doctor Strange',
  ];
  public heroDeleted: string = '';

  borrarUltimo(): void {
    const deleted = this.heroNames.pop();
    this.heroDeleted = deleted ? deleted : 'No quedan mas heroes';
  }
}
