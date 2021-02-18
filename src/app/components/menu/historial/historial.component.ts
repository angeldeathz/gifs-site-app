import { Component } from '@angular/core';
import { GifInterface } from 'src/app/shared/interfaces/gif.interface';
import { GifService } from '../../../shared/services/gif.service';
import { GiphyService } from '../../../shared/services/giphy.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {

  constructor(
    private gifService: GifService,
    private giphyService: GiphyService) { }

  get historial() {
    return this.gifService.getHistorial();
  }

  public async buscarGif(filtro: string) {
    if (filtro) {
      const imagenes: GifInterface = await this.giphyService.get(filtro);
      this.gifService.setImagenes(imagenes.data);
    }
  }

  public limpiarHistorial() {
    this.gifService.clearHistorial();
  }
}
