import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeApi = 'http://localhost:8080/home';

  constructor(private http: HttpClient) { }

  getHomeDataList(): Observable<any> {
    return this.http.get(this.homeApi);
    }
}
