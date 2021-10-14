import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {  }

  getItemList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Item>>{  //Interfaces
    let params = new HttpParams.set('ordering', ordering);

    if (search) {  //For Appending the Search Parameter
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Item>>(`${env.BASE_URL/items}`);
  }
}
