import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10';


  constructor(private http: HttpClient) { }

  search(): Observable<any> {
    const headers = new HttpHeaders()
    .set('X-Mashape-Key', '0JLBKYq2OjmshWNxEkzneQpvnkTFp1AMEpRjsngMVWjwR3kwkN')
    .set('Accept', 'application/json');
    return this.http.get<any>(this.url, { headers: headers });
  }

}
