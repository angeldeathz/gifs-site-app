import { Component } from '@angular/core';
import { GifService } from '../../../shared/services/gif.service';
import { GiphyService } from '../../../shared/services/giphy.service';
import { GifInterface } from '../../../shared/interfaces/gif.interface';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent {

  public filtro = "";
  
  constructor(
    private giphyService: GiphyService,
    private gifService: GifService) { }

  async buscarGif() {
    if (this.filtro) {
      this.gifService.addToHistorial(this.filtro);
      const imagenes: GifInterface = await this.giphyService.get(this.filtro);
      this.gifService.setImagenes(imagenes.data);
      this.filtro = "";
    }
  }
}
