import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial: string[] = [];

  constructor() { }

  public addToHistorial(search: string) {
    // unshift inserta un registro al principio de la lista

    const result = this._historial.find(x => x.toLocaleLowerCase() === search.toLocaleLowerCase());

    if (!result) {

      if (this._historial.length === 10) {
        this._historial.pop();
      }

      this._historial.unshift(search);
    }
  }

  public getHistorial() {
    return [...this._historial];
  }
}
