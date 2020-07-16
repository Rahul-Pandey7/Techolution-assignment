import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient) { }

  getStudentsList() {
   return  this.http.get("../assets/data/data.json")
  }
}
