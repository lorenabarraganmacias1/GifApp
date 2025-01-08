import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';




@Injectable({providedIn: 'root'})
export class GifsService{

  public gifList: Gif[] = [];

  private _tagsHistory:string[] = [];

  private apiKey: string = 'C5t0OwrWVMetdbg9StPjtz4v0QSITgVk';

  private serviceUrl: string ='https://api.giphy.com/v1/gifs';



  constructor( private http: HttpClient) {
    this.loadLocalStore();
    console.log('locaaaaaaaa')
  }

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
    this.SaveLocalStorage();

  }

//salvar local store, es decir que la información se guarde en el local store
  private SaveLocalStorage() :void {

    localStorage.setItem('history', JSON.stringify( this._tagsHistory));

  }

  private loadLocalStore():void{

    if( !localStorage.getItem( 'history' ) ) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if( this._tagsHistory.length === 0)return;
    this.searchTag(this._tagsHistory[0]);

  }


// buscar los valores del tag de lo que la persona esta buscando
    searchTag(tag:string):void {
    if(tag.length === 0)return;
    this.organizeHistory(tag);
    // this._tagsHistory.unshift(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit','10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`,{params})



      .subscribe(resp => {

        this.gifList = resp.data;

        // console.log(resp);
      })


    // fetch()
    //    .then(resp => resp.json())
    //    .then(data => console.log(data));

  }

}