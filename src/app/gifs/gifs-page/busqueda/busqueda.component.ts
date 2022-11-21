import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  nuevo:string = "";

  constructor(private gifsService: GifsServiceService) { }

  ngOnInit(): void {
  }
  busqueda(){
 
    if(this.gifsService.historial.indexOf(this.nuevo)==-1){

      this.gifsService.buscarGifs(this.nuevo);
      this.nuevo = "";
    
    }
  }
}
