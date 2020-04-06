import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  private newsApi = environment.newsApi;

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.getNewsData();
  }

  getArticlesTechnology(): Observable<any> {
    return this.getNewsData('technology');
  }

  private getNewsData(newsCategory?: string): Observable<any> {
    let body = {};
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    if (newsCategory) {
      body = {
        category: newsCategory,
      };
    }

    return this.http
      .post(this.newsApi, body, { headers: httpHeaders })
      .pipe(map((data: any) => JSON.parse(data).articles));
  }
}
