import { Component, } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public title : string = 'DBZ Personajes';
  public alias : string = 'DBZ';

  constructor ( private dbzService : DbzService){}

  get Characters(): Character[]{
    return this.dbzService.characters;
  }

  onDeleteCharacter (id: string ): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter (character: Character){
    this.dbzService.addCharacter(character);
  }

}