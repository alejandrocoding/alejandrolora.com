import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '@services/index';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`
})

export class AppComponent implements OnInit {

  constructor(private _themeService: ThemeService, private _renderer: Renderer2) { }

  ngOnInit() {
    this.subscribeToThemeChanges();
  }

  private subscribeToThemeChanges() {
    this._themeService.activeTheme$.subscribe((theme) => {
      this._renderer.removeClass(document.body, document.body.className);
      this._renderer.addClass(document.body, theme);
    });
  }

}