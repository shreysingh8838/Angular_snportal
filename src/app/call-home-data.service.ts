import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallHomeDataService {
  private homeApi = 'http://localhost:9090/home';

  constructor(private http: HttpClient) { }

  getHomeDataList(): Observable<any> {
    return this.http.get(this.homeApi);
    }
}
