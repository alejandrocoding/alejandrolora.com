import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { DBTableEnum } from '@app/_common/enums';
import { IBook } from '@app/courses-books/_shared';

@Injectable()
export class BooksService {

  constructor(private _angularFirestore: AngularFirestore) { }

  getAll(): Observable<IBook[]> {
    return this._angularFirestore.collection<IBook>(DBTableEnum.Books).valueChanges();
  }

}
