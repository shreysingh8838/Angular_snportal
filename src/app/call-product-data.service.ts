import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallProductDataService {

  private sendLinkurl = "https://milegisarkarinaukri.online:9090/prodExtractedLink";
  // private sendLinkurl = "http://localhost:8080/prodExtractedLink";

  private getDataurl = "https://milegisarkarinaukri.online:9090/prodData";
  // private getDataurl = "http://localhost:8080/prodData";


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
