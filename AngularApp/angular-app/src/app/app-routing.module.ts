import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import {FilmSearchComponent} from "./pages/film-search/film-search.component";
import {FilmComponent} from "./pages/film/film.component";

const routes: Routes = [
   {path: 'search', component: FilmSearchComponent, pathMatch: 'full'},
   {path: 'film/:id', component: FilmComponent},
  {path: '**', redirectTo: '/search',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
