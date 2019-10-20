import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }
  sort(arr:Array<number>){
      var sortedArray: number[] = arr.sort((n1,n2) => {
      if (n1 > n2) {
          return 1;
      }

      if (n1 < n2) {
          return -1;
      }

      return 0;
    });
    return sortedArray
  }
}
