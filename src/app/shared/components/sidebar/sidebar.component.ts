import { Component,  ViewChild,  ElementRef } from '@angular/core';
import { GifsService} from '../../../gifs/services/gifs.service';



@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

//   @ViewChild('txtTag')
// public tagview!: ElementRef<HTMLButtonElement>

  constructor(private gifsService: GifsService) { }


  get tags(){

    return this.gifsService.tagsHistory;
  }


  sidebarTag(tags: string ){

    // const oldTag = this.tagview.nativeElement.value;

  return this.gifsService.searchTag(tags);

    //Al dar click a un oldTag, este me retorne los gifs o haga la busqueda




  }





}
