import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { IApp } from '@app/apps/_shared';
import { DBTableEnum } from '@app/_common/enums';

@Injectable()
export class AppsService {

  constructor(private _angularFirestore: AngularFirestore) { }

  getAll(): Observable<IApp[]> {
    return this._angularFirestore.collection<IApp>(DBTableEnum.Apps).valueChanges();
  }

}
