import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.sass']
})
export class FilmCardComponent implements OnInit {
  @Input() name: string = "";
  @Input() year: string = "";
  @Input() poster: string | undefined = "";
  @Input() id: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
