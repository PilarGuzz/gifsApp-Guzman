import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFSearchResponse } from './interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _historial :string[] = [];
  private api_key : string = 'tLt4SiPdwcNdb6W5VCZSFgLQEnwGffpG';
  private url : string = 'https://api.giphy.com/v1/gifs/search?api_key=';
  private results: Gif[] = [];

  

  constructor(private http : HttpClient) { }

  get historial(): string[]{
    return [...this._historial];
  };

  buscarGifs ( query: string): void {
    let clean = query.trim().toLowerCase();
    if(clean !==''){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

    }
    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', query)

    this.http.get<GIFSearchResponse>(this.url, {params})
    .subscribe((resp) => this.results = resp.data
    )
    
  }


}
