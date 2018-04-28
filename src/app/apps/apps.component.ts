import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { RestoreDBService } from '@services/index';
import { IApp, AppCategoryEnum, AppsService } from './_shared/index';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit, OnDestroy {

  apps: IApp[];
  appsSub: Subscription;

  angularCategory = AppCategoryEnum.ANGULAR;
  javaCategory = AppCategoryEnum.ANDROID_JAVA;
  kotlinCategory = AppCategoryEnum.ANDROID_KOTLIN;

  constructor(
    private _restoreDBService: RestoreDBService,
    private _appsService: AppsService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.appsSub = this._appsService.getAll().subscribe((apps) => {
      this.apps = apps;
      if (!this.apps.length) {
        this.restoreDB();
      }
    });
  }

  ngOnDestroy() {
    this.appsSub.unsubscribe();
  }

  satinazeImage(link: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${link})`);
  }

  private restoreDB() {
    this._restoreDBService.restoreDB();
  }

}
