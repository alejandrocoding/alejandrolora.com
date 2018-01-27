import { Component, OnInit, Renderer2 } from '@angular/core';
import { RestoreDBService, ThemeService } from '@services/index';
import { Theme } from '@app/theme';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`
})

export class AppComponent extends Theme implements OnInit {

  constructor(
    private _restoreDBService: RestoreDBService,
    protected _themeService: ThemeService,
    protected _renderer: Renderer2) {
    super(_themeService, _renderer);
  }

  ngOnInit() {
    this.subscribeToThemeChanges();
    // this.restoreDB();
  }

  protected restoreDB() {
    this._restoreDBService.restoreDB();
  }

}
