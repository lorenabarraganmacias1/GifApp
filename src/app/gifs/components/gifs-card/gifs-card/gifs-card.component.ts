import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-Card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent {

@Input()
public gif!:Gif;

}
