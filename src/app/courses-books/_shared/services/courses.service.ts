import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { DBTableEnum } from '@app/_common/enums';
import { ICourse } from '@app/courses-books/_shared';

@Injectable()
export class CoursesService {

  constructor(private _angularFirestore: AngularFirestore) { }

  getAll(): Observable<ICourse[]> {
    return this._angularFirestore.collection<ICourse>(DBTableEnum.Courses).valueChanges();
  }

}
