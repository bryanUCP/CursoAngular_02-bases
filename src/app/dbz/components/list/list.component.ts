import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    //TODO: Emitir el ID del personaje}
    if( !id ) return; //Si no tengo un id mi metodo onDelete.emit no se va a llamar

    console.log(id);

    this.onDelete.emit(id);

  }

}