import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alph'
})
export class AlphPipe implements PipeTransform {

  transform(value: any[],args:string): any {
    if (args === "ascending"){
      return value.sort();
    }else if (args ==="descending"){
      return value.sort((a,b) => (a > b ? -1 : 1));
    }

  }

}
