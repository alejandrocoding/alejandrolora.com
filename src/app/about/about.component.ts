import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { AboutI18NService } from './_shared/index';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private _aboutI18NService: AboutI18NService,
    private matSnackBar: MatSnackBar) { }

  ngOnInit() { }

  showMessage() {
    const message = this._aboutI18NService.getHelloTranslated();
    this.matSnackBar.open(message, '', { duration: 1000 });
  }

}
