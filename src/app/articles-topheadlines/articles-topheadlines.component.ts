import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-topheadlines',
  templateUrl: './articles-topheadlines.component.html',
  styleUrls: ['./articles-topheadlines.component.scss'],
})
export class ArticlesTopheadlinesComponent implements OnInit {
  public articles: Observable<any>;

  constructor(private newsApi: NewsapiService) {}

  ngOnInit(): void {
    this.newsApi.getTopHeadlines().subscribe((data) => (this.articles = data));
  }
}
