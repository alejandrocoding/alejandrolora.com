import { Renderer2 } from '@angular/core';
import { ThemeService } from '@services/index';

export class Theme {

  private readonly themeStorageId = 'alejandrolora.com.theme.class';

  constructor(
    protected _themeService: ThemeService,
    protected _renderer: Renderer2) { }

  protected subscribeToThemeChanges() {
    this._themeService.activeTheme$.subscribe((theme) => {
      this._renderer.removeClass(document.body, document.body.className);
      this._renderer.addClass(document.body, theme);
      this.setThemeIntoLocalStorage(theme);
    });
    this.setThemeIfPersisted();
  }

  private setThemeIfPersisted() {
    const themePersisted = this.getThemeIntoLocalStorage();
    if (themePersisted) {
      this._themeService.applyTheme(themePersisted);
    }
  }

  private getThemeIntoLocalStorage() {
    return localStorage.getItem(this.themeStorageId);
  }

  private setThemeIntoLocalStorage(themeClass: string) {
    localStorage.setItem(this.themeStorageId, themeClass);
  }

}
