import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ITheme, ILanguage } from '@interfaces/index';
import { ThemeService } from '@services/index';
import { HeaderI18NService } from './header-i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themes: ITheme[];
  languages: ILanguage[];

  @Output() toogleSidenavEvt = new EventEmitter();

  constructor(
    private _headerI18NService: HeaderI18NService,
    private _themeService: ThemeService) { }


  ngOnInit() {
    this.initThemeMenu();
    this.initLanguages();
  }

  private initThemeMenu() {
    this.themes = this._headerI18NService.getThemeMenusTranslated();
  }

  private initLanguages() {
    this.languages = [
      { name: 'English', code: '' },
      { name: 'Español', code: 'es' }
    ];
  }

  toogleSidenav() {
    this.toogleSidenavEvt.emit();
  }

  changeTheme(themeClass: string) {
    this._themeService.applyTheme(themeClass);
  }

  changeLanguage(code: string) {
    if (code) {
      window.location.href = `${window.location.origin}/${code}/${window.location.hash}`;
    } else {
      window.location.href = `${window.location.origin}/${window.location.hash}`;
    }
  }
}
