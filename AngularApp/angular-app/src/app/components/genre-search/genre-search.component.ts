import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import {ConnectedPosition, Overlay, OverlayContainer, OverlayModule} from '@angular/cdk/overlay';


export interface Genre {
  label: string;
  value: string;
}

export const Genres: Array<Genre> = [
  {
    label: 'Комедия',
    value: 'comedy'
  }, {
    label: 'Боевик',
    value: 'action'
  }, {
    label: 'Нуар',
    value: 'noir'
  }, {
    label: 'Фантастика',
    value: 'fantasy'
  }
];

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenreSearchComponent),
      multi: true
    }
  ]
})

export class GenreSearchComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Жанр';

  inputSearch: FormControl = new FormControl('');

  genres: Array<Genre> = new Array<Genre>();

  overlayIsOpen: boolean = false;

  selected: Array<Genre> = new Array<Genre>();

  positions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: -21,
    },
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      panelClass: 'no-enogh-space-at-bottom',
    },
  ];

  onChangeCallback = (v: any) => {
  };
  onTouchedCallback = () => {
  };

  constructor() {
    this.inputSearch.valueChanges.subscribe(value => {
      if (!value || value.length < 1) {
        this.genres = [];
        this.overlayIsOpen = false;
        return;
      }
      this.genres = Genres.filter(item => item.label.startsWith(value));
      console.log(this.genres);
      this.overlayIsOpen = true;
    });
  }

  writeValue(value: Array<Genre>): void {
    if (value !== this.selected) {
      this.selected = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }


  removeGenre(genre: Genre): void {
    console.log("deleted")
    this.selected = this.selected.filter(item => item.value !== genre.value);
  }

  selectGenre(genre: Genre): void {
    console.log(typeof this.selected)
    this.selected.push(genre);
    this.overlayIsOpen = false;
    this.inputSearch.reset();

    this.onChangeCallback(this.selected);
    this.onTouchedCallback();
  }

  close(): void {
    this.overlayIsOpen = false;
  }

}

