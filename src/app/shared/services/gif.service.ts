import { Injectable } from '@angular/core';
import { GifInterface, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public addToHistorial(search: string) {
    const storage = localStorage.getItem("historial_busqueda");

    const historial = JSON.parse(storage) || [];

    // unshift inserta un registro al principio de la lista
    const result = historial.find(x => x.toLocaleLowerCase() === search.toLocaleLowerCase());

    if (!result) {

      if (historial.length === 10) {
        historial.pop();
      }

      historial.unshift(search);
    }

    localStorage.setItem("historial_busqueda", JSON.stringify(historial));
  }

  public getHistorial() {
    const historial = localStorage.getItem("historial_busqueda");
    return JSON.parse(historial);
  }

  public setImagenes(imagenes: Gif[]) {
    localStorage.setItem("imagenes", JSON.stringify(imagenes));
  }

  public getImagenes() {
    const imagenes = localStorage.getItem("imagenes");
    return JSON.parse(imagenes);
  }
}
