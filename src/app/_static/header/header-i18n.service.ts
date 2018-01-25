import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { ITheme } from '@entities/index';

@Injectable()
export class HeaderI18NService {

    constructor( @Inject(LOCALE_ID) private localeId: string) { }

    getThemeMenusTranslated(): ITheme[] {
        if (this.localeId === 'es') {
            return [
                { name: 'Tema claro', class: 'my-theme-light' },
                { name: 'Tema oscuro', class: 'my-theme-dark' },
                { name: 'Tema por defecto', class: 'my-theme' }
            ];
        }
        return [
            { name: 'Light theme', class: 'my-theme-light' },
            { name: 'Dark theme', class: 'my-theme-dark' },
            { name: 'Default theme', class: 'my-theme' }
        ];
    }

}