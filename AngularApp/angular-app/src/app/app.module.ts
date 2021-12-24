import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmSearchComponent } from './pages/film-search/film-search.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmComponent } from './pages/film/film.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { AddfilmComponent } from './pages/addfilm/addfilm.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmSearchComponent,
    ToggleComponent,
    SearchComponent,
    FilmCardComponent,
    FilmComponent,
    AddfilmComponent,
    GenreSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
