import { HttpClient, HttpParams } from '@angular/common/http';

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
    const url =  environment.urlGiphyApi + "search";

    const params = new HttpParams()
      .set("api_key", environment.apiKeyGif)
      .set("q", query)
      .set("limit", "50");

    return (await this.restClient.get<GifInterface>(url, params)).toPromise();
  }
}
