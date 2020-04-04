import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-technology',
  templateUrl: './articles-technology.component.html',
  styleUrls: ['./articles-technology.component.scss'],
})
export class ArticlesTechnologyComponent implements OnInit {
  public articles: Observable<any>;

  constructor(private newsApi: NewsapiService) {}

  ngOnInit(): void {
    this.newsApi
      .getArticlesTechnology()
      .subscribe((data) => (this.articles = data));
  }
}
