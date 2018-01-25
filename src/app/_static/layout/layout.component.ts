import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() { }

  ngOnInit() { }

  toogleSidenav() {
    this.sidenav.toggle();
  }

}
