import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  private apiKey = environment.newsApiKey;
  private baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    const url = `${this.baseUrl}/top-headlines?language=en&country=us&apiKey=${this.apiKey}`;
    return this.getNewsData(url);
  }

  getArticlesTechnology(): Observable<any> {
    const url = `${this.baseUrl}/top-headlines?category=technology&language=en&country=us&apiKey=${this.apiKey}`;
    return this.getNewsData(url);
  }

  private getNewsData(url: string): Observable<any> {
    return this.http.get(url).pipe(map((data: any) => data.articles));
  }
}
