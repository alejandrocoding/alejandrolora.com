import { Pipe, PipeTransform } from '@angular/core';
import { AppCategoryEnum, IApp } from '@app/apps/_shared';

@Pipe({ name: 'filterByCategory' })
export class FilterByCategoryPipe implements PipeTransform {

  transform(apps: IApp[], categoryToFilter: AppCategoryEnum): any[] {
    if (!apps) {
      return apps;
    }
    return apps.filter((app) => app.category === categoryToFilter);
  }
}
