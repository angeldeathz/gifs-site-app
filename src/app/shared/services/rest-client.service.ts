import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private httpClient: HttpClient) { }

  public async get<T>(url: string, params?: HttpParams) {
    return this.httpClient.get<T>(url, {params});
  }
}
