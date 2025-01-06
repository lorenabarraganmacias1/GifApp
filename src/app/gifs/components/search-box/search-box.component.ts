import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
         class="form-control"
         placeholder="buscar gifs..."

  (keyup.enter)="searchTag()"
  #txtTagInput


  >
  `
})

export class SearchBoxComponent implements OnInit {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(public gifsService: GifsService) { }


  // SearchTag(newTag:string){
    searchTag(){

      const newTag = this.tagInput.nativeElement.value;

      this.gifsService.searchTag(newTag);

      this.tagInput.nativeElement.value = '';

  }

  ngOnInit() { }
}