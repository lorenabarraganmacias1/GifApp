import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'Gifs-Card-list',
  templateUrl: './card-list.Component.html'
})

export class CardListComponent  {

@Input()
public gifs:Gif[]=[
  
]



}