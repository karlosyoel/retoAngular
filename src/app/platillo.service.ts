import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  url = "https://www.themealdb.com/api/json/v1/1/random.php";
  urlPopulares = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  urlBuscarLibre = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  constructor(private http: HttpClient) { }

  findPlatillos(b:any):Observable<any>{
    return this.http.get(this.urlBuscarLibre+b);
  }

  getRandomPlatillo():Observable<any>{
     return this.http.get(this.url);
  }

  getIngredientesPopulares():Observable<any>{
    return this.http.get(this.urlPopulares);
  }
}
