import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IApp } from './_shared/interfaces/IApp';
import { AppsService } from './_shared/services/apps.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit, OnDestroy {

  apps: IApp[];
  appsSub: Subscription;

  constructor(
    private _appsService: AppsService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.appsSub = this._appsService.getAll().subscribe((apps) => this.apps = apps);
  }

  ngOnDestroy() {
    this.appsSub.unsubscribe();
  }

  satinazeImage(link: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${link})`);
  }

}
