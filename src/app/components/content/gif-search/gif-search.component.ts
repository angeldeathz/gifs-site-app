import { Component, OnInit } from '@angular/core';
import { GifService } from '../../../shared/services/gif-service.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent {

  public filtro = "";
  
  constructor(private gifService: GifService) { }

  buscarGif() {
    if (this.filtro) {
      this.gifService.addToHistorial(this.filtro);
      this.filtro = "";
    }
  }
}
