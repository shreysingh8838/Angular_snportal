import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallHomeDataService {
  private homeApi = 'https://43.205.215.50:9090/home';
  // private homeApi = 'http://localhost:8080/home';

  constructor(private http: HttpClient) { }

  getHomeDataList(): Observable<any> {
    return this.http.get(this.homeApi);
    }
}
