import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallProductDataService {

  private sendLinkurl = "http://localhost:8081/prodExtractedLink";
  private getDataurl = "http://localhost:8081/prodData";

  constructor(private httpClient : HttpClient) { }

  sendLink(link: string): Observable<string> {
    const requestBody = { "link" : link };
    console.log("Data sent to Backend")
    console.log(requestBody);
    return this.httpClient.post<string>(this.sendLinkurl, requestBody);
  }
  
  // getHomeDataList(): Observable<any> {
  //   console.log(this.httpClient.get(this.getDataurl));
  //   return this.httpClient.get(this.getDataurl);
  // }
}
