import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { GifInterface } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private restClient: RestClientService) { }

  public async get(query: string) {
    const url = "https://api.giphy.com/v1/gifs/search?api_key="+ environment.apiKeyGif +"&q=" + query + "&limit=25";
    return (await this.restClient.get<GifInterface>(url)).toPromise();
  }
}
