import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeService {

    private activeThemeSource = new Subject<string>();
    public activeTheme$ = this.activeThemeSource.asObservable();

    applyTheme(theme: string) {
        this.activeThemeSource.next(theme);
    }

}