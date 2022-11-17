import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService: GifsServiceService) { }

  ngOnInit(): void {
  }
  busqueda(event: any){
    let query: string = event.target.value
    if((this.gifsService.historial.indexOf(query)==-1)&&(this.gifsService.historial.length<10)){

      this.gifsService.buscarGifs(query);
    
    }
  }
}
