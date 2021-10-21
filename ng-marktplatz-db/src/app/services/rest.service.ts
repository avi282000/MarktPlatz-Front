import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Items } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http : HttpClient) {
    
   }

   ngOnInit(){

   }

   itemUrl: string = "http://127.0.0.1:5000/0x256b3bafe9c099dcffb7b40c76f3571007";
   
   readItems(){
      return this.http.get<Items[]>(this.itemUrl);
   }

   
}
