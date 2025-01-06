import { Injectable } from '@angular/core';
import { GifsModule } from '../gifs.module';




@Injectable({providedIn: 'root'})
export class GifsService{

  private _tagsHistory:string[] = [];

  private apiKey: string = 'C5t0OwrWVMetdbg9StPjtz4v0QSITgVk';



  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory]
  }



  private organizeHistory(tag:string){
    // esto graba todo en minuscula
    tag = tag.toLowerCase();

    // si el this.tagsHistory incluye el nuevo tag es decir si se repide ya lo que tengo en history y no recibirlo, solo el que sea diferente
    if(this._tagsHistory.includes(tag) ){

      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    //  colocarlo al inicio el tag nuevo
    this._tagsHistory.unshift(tag);

    // el limite de tag en las busquedas vistas son 10

    this._tagsHistory = this.tagsHistory.splice(0,10);

  }

// buscar los valores del tag de lo que la persona esta buscando
  searchTag(tag:string){
    if(tag.length === 0)return;
    this.organizeHistory(tag);
    // this._tagsHistory.unshift(tag);

    console.log(this._tagsHistory)

  }

}