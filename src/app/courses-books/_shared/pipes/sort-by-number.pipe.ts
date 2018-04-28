import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '@app/courses-books/_shared';

@Pipe({ name: 'sortByNumber' })
export class SortByNumberPipe implements PipeTransform {

  transform(array: ICourse[]): ICourse[] {
    if (!array) {
      return array;
    }
    array.sort((element1: ICourse, element2: ICourse) => {
      if (element1.number < element2.number) {
        return -1;
      } else if (element1.number > element2.number) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
