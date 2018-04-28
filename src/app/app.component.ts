import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '@services/index';
import { Theme } from '@app/theme';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`
})

export class AppComponent extends Theme implements OnInit {

  constructor(
    protected _themeService: ThemeService,
    protected _renderer: Renderer2) {
    super(_themeService, _renderer);
  }

  ngOnInit() {
    this.subscribeToThemeChanges();
  }
}
