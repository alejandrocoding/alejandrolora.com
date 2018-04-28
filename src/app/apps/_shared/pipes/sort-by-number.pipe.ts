import { Pipe, PipeTransform } from '@angular/core';
import { IApp } from '@app/apps/_shared';

@Pipe({ name: 'sortByNumber' })
export class SortByNumberPipe implements PipeTransform {

  transform(apps: IApp[]): IApp[] {
    if (!apps) {
      return apps;
    }
    apps.sort((app1: IApp, app2: IApp) => {
      if (app1.number < app2.number) {
        return -1;
      } else if (app1.number > app2.number) {
        return 1;
      } else {
        return 0;
      }
    });
    return apps;
  }
}
