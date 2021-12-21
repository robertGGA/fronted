import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "input-rule"
})
export class InputRulePipe implements  PipeTransform {
  transform(value: any, ...args: any[]): any {
  }

}
