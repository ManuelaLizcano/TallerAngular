import { Injectable } from '@angular/core';
import{ HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Serie } from "./serie";
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {

  private apiUrl=environment.baseUrl;

constructor(private http:HttpClient) { }

    getSerie(): Observable<Serie[]>{
      return this.http.get<Serie[]>(this.apiUrl);
    }
}
