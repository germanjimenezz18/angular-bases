import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html'
})

export class ListDbzComponent {
  @Input()
  public characterlist : Character[] = [];

  @Output() onDeleteId : EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id? : string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
