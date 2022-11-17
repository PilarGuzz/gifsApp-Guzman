import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  

  private _historial :string[] = [];
  

  constructor() { }

  get historial(): string[]{
    return [...this._historial];
  };

  buscarGifs ( query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
