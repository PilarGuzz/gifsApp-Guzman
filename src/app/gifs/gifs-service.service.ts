import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFSearchResponse } from './interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _historial :string[] = [];
  private api_key : string = 'tLt4SiPdwcNdb6W5VCZSFgLQEnwGffpG';
  private url : string = 'https://api.giphy.com/v1/gifs/search';
  results: Gif[] = [];

  

  constructor(private http : HttpClient) {
    //La admiracion se usa para asegurar al programa que no va a devolver un valor nulo, si lo da crea el array vacio
    this._historial = JSON.parse(localStorage.getItem('history')!) || [];
  }

  get historial(): string[]{
    return [...this._historial];
  };

  buscarGifs ( query: string): void {
    let clean = query.trim().toLowerCase();
    if(clean !==''){
      if(this._historial.indexOf(query)==-1){
        this._historial.unshift(query);
      }
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('history', JSON.stringify(this._historial));
   


    }
    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', query)
    .set('limit', 10)
    //LO SIQUIENTE O ESTABLECE UN PARAMETRO NUEVO, DEVUELVE UN OBJETO NUEVO
    //HTTPPARAMS CON EL ATRIBUTO3 AÑADIDO
    // params.set('atributo3', 3)

    this.http.get<GIFSearchResponse>(this.url, {params})
    .subscribe((resp) => this.results = resp.data
    )
    
    
  }


}
