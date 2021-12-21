import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import {FilmSearchComponent} from "./pages/film-search/film-search.component";

const routes: Routes = [
   { path: 'film-search', component: FilmSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
