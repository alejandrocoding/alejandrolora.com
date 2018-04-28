import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { IBook, ICourse, BooksService, CoursesService } from './_shared/index';

@Component({
  selector: 'app-courses-books',
  templateUrl: './courses-books.component.html',
  styleUrls: ['./courses-books.component.scss']
})
export class CoursesBooksComponent implements OnInit, OnDestroy {

  courses: ICourse[];
  books: IBook[];
  coursesSub: Subscription;
  booksSub: Subscription;

  cardHoverClass = 'mat-elevation-z8';

  constructor(
    private _coursesService: CoursesService,
    private _booksService: BooksService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.coursesSub = this._coursesService.getAll().subscribe((courses) => {
      this.courses = courses;
    });
    this.booksSub = this._booksService.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
    this.booksSub.unsubscribe();
  }

  satinazeImage(link: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${link})`);
  }

  addHoverClass(event: any) {
    event.currentTarget.classList.add(this.cardHoverClass);
  }

  removeHoverClass(event: any) {
    event.currentTarget.classList.remove(this.cardHoverClass);
  }

}
