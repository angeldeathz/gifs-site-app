import { Component } from '@angular/core';
import { GifService } from '../../../shared/services/gif.service';
import { Gif } from '../../../shared/interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})
export class GifListComponent {

  constructor(private gifService: GifService) { }

  get imagenes(): Gif[] {
    return this.gifService.getImagenes();
  }
}
