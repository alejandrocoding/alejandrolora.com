import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IApp } from './_shared/interfaces/IApp';
import { AppsService } from './_shared/services/apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  apps: IApp[];

  constructor(
    private _appsService: AppsService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._appsService.getAll().subscribe((apps) => this.apps = apps);
  }

  satinazeImage(link: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${link})`);
  }

}
