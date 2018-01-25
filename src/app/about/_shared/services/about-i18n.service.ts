import { Injectable, LOCALE_ID, Inject } from '@angular/core';

@Injectable()
export class AboutI18NService {

    constructor( @Inject(LOCALE_ID) private localeId: string) { }

    getHelloTranslated(): string {
        if (this.localeId === 'es') {
            return 'Hola! :)';
        }
        return 'Hi! :)';
    }

}