import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { ITheme } from '@interfaces/index';

@Injectable()
export class HeaderI18NService {

  constructor( @Inject(LOCALE_ID) private localeId: string) { }

  getThemeMenusTranslated(): ITheme[] {
    if (this.localeId === 'es') {
      return [
        { name: 'Tema rojo', class: 'my-theme-red' },
        { name: 'Tema verde', class: 'my-theme-green' },
        { name: 'Tema azul', class: 'my-theme-blue' },
        { name: 'Tema claro', class: 'my-theme-light' },
        { name: 'Tema oscuro', class: 'my-theme-dark' },
        { name: 'Tema por defecto', class: 'my-theme' }
      ];
    }
    return [
      { name: 'Red theme', class: 'my-theme-red' },
      { name: 'Green theme', class: 'my-theme-green' },
      { name: 'Blue theme', class: 'my-theme-blue' },
      { name: 'Light theme', class: 'my-theme-light' },
      { name: 'Dark theme', class: 'my-theme-dark' },
      { name: 'Default theme', class: 'my-theme' }
    ];
  }

}
