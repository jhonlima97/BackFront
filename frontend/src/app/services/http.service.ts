import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Technology } from "../models/technology.model";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly _http: HttpClient) { }

  // Lista todas mis technologies
  public getTechnologies() {
    ////return this._http.get<Technology[]>(this.baseUrl + "/technologies");
    return this._http.get<{data: Technology[]}>(this.baseUrl + "/technologies");

  }
  
  public getTechnology(id: string) {
    return this._http.get<Technology>(this.baseUrl + "/technology/" + id);
  }

  // Lista technologies por parametro ingresado
  public searchTechnology(query: string) {
    return this._http.get<{data: Technology[]}>(
      this.baseUrl + "/technology/search/" + query
    );
  }
  
}