import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass']
})
export class ToggleComponent implements ControlValueAccessor {
  flag = true;
  constructor() {}

  onChangeCallback = (v: any) => {};
  onTouchedCallback = () => {};
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: boolean): void {
    if (value !== this.flag) {
      this.flag = value;
    }
  }

  toggle(value: boolean): void {
    if (value !== this.flag) {
      this.flag = value;
    }
  }
}
