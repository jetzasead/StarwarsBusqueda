import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { ApiResponse } from './api.response';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://swapi.dev/api/';

   public getUsuarios():Observable<ApiResponse> {
    return  this.http.get<ApiResponse>(this.baseUrl+'people/');
  }
}
