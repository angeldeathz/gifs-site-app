import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private httpClient: HttpClient) { }

  public async get<T>(url: string) {
    return await this.httpClient.get<T>(url);
  }
}
