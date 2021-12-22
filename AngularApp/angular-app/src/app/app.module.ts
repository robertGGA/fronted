import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmSearchComponent } from './pages/film-search/film-search.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmComponent } from './pages/film/film.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmSearchComponent,
    ToggleComponent,
    SearchComponent,
    FilmCardComponent,
    FilmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
