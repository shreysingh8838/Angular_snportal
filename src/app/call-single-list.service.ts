import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallSingleListService {
  private apiUrl = 'http://localhost:8080/';
  
  constructor(private http : HttpClient) { }

  getDataList(flag: string): Observable<any> {
    return this.http.get(this.apiUrl + flag);
  }
}
