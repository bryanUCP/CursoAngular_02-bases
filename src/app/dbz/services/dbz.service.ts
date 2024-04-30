import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

//console.log(uuid())

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name:'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    }
  ];


  addCharacter( NewCharacter: Character):void {

    /* Lo que hace esta linea de codigo es que toma todas sus propiedades de NewCharacter
    y esparcelas en este nuevo objeto llamado newCharacter2

    Esta linea de codigo es mejor que haces una destructuracion, porque si tuvieramos
    mas propiedades aqui no hay que cambiar absolutamente nada. Sino que con ...NewCharacter
    todas las propiedades sin importar son 3 o 50 propiedades. */
    const newCharacter2: Character = { id: uuid(), ...NewCharacter }

    this.characters.push(newCharacter2);
  }

  /*onDeleteCharacter (index:number){
    this.characters.splice(index,1)
  }*/

  deleteCharacterById (id:string){
    this.characters = this.characters.filter ( character => character.id !== id);
  }

}
