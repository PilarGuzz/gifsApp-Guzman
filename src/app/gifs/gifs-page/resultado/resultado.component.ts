import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';
import { Gif } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {

  constructor(private GifService: GifsServiceService) { }

  ngOnInit(): void {
  }
  get results():Gif[]{
    return this.GifService.results
  }

}
