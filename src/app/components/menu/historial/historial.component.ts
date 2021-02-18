import { Component, OnInit } from '@angular/core';
import { GifService } from '../../../shared/services/gif.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {

  constructor(private gifService: GifService) { }

  get historial() {
    return this.gifService.getHistorial();
  }
}
