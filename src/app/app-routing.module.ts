import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesTechnologyComponent } from './articles-technology/articles-technology.component';
import { ArticlesTopheadlinesComponent } from './articles-topheadlines/articles-topheadlines.component';


const routes: Routes = [
  { path: 'technology', component: ArticlesTechnologyComponent },
  { path: 'topheadlines', component: ArticlesTopheadlinesComponent },
  { path: '', component: ArticlesTopheadlinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
