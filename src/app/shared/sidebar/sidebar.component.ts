import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent implements OnInit {

  
  constructor(private gifsService: GifsServiceService) { 

  }
  get history():string[]   {
    return this.gifsService.historial
  }

  ngOnInit(): void {
  }

  busqueda(gif: string){
 
    
    this.gifsService.buscarGifs(gif);
    
 
  }


}
