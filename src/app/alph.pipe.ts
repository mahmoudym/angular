import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alph'
})
export class AlphPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.sort()
  }

}
