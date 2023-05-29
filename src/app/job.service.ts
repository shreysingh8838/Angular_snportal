import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  private apiUrl = 'http://localhost:8080/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<string[]> {
    const res = this.http.get<string[]>(this.apiUrl);
    console.log(res);
    return res;
  }

  // getJobs(): Observable<Map<String, String>> {
  //   const res = this.http.get<string[]>(this.apiUrl);
  //   console.log(res);
  //   return res.map((item : any) => {
  //     return {
  //       key: item.key,
  //       value: item.value,
  //     };
  //   });
  // }
}
