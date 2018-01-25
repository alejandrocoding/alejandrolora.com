import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() toogleSidenavEvt = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  async toogleSidenav() {
    this.toogleSidenavEvt.emit();
  }


}
