// tslint:disable:max-line-length
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IApp, AppCategoryEnum } from '@app/apps/_shared';
import { DBTableEnum } from '@app/_common/enums';
import { ICourse, IBook } from '@app/courses-books/_shared';

@Injectable()
export class RestoreDBService {

  constructor(private _angularFirestore: AngularFirestore) { }

  restoreDB() {
    this.importAppsTable();
    this.importCoursesTable();
    this.importBooksTable();
  }

  private importAppsTable() {
    const collection: AngularFirestoreCollection<IApp> = this._angularFirestore.collection(DBTableEnum.Apps);

    const apps: IApp[] = [
      { number: 1, title: 'Getting Started', subtitle: 'Meetup app', description: 'Description not available yet.', icon: 'https://secure.meetupstatic.com/s/img/786824251364989575000/logo/swarm/m_swarm_630x630.png', image: 'https://firebasestorage.googleapis.com/v0/b/website-b882d.appspot.com/o/gettingstartedpic.jpg?alt=media&token=fe70d8a4-7b77-43ef-b529-2f6fcf59c26e', link: 'https://angular-getting-started.netlify.com/', codeLink: 'https://github.com/AL-MeetUps/AngularGettingStarted', category: AppCategoryEnum.ANGULAR },
      { number: 2, title: 'Unit Converter', subtitle: 'Interview test', description: 'Description not available yet.', icon: 'http://dl.hiapphere.com/data/icon/201505/HiAppHere_com_com.droidfoundry.unitconverter.png', image: 'https://firebasestorage.googleapis.com/v0/b/website-b882d.appspot.com/o/converterpic.jpg?alt=media&token=4a6d4c1d-de36-49da-87ad-d0b206c25235', link: 'https://unit-converter.netlify.com/', codeLink: 'https://github.com/ialex90/Converter', category: AppCategoryEnum.ANGULAR },
      { number: 3, title: 'PigLatin Game', subtitle: 'Interview test', description: 'Description not available yet.', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ2JYTANA9wka3kRykLWrrW7liAipJznV61dOuL57bomU305d', image: 'https://firebasestorage.googleapis.com/v0/b/website-b882d.appspot.com/o/piglatinpic.jpg?alt=media&token=084563d3-88f0-477f-a4f8-48c44a9113fb', link: 'http://pig-latin-game.netlify.com/#/home', codeLink: 'https://github.com/ialex90/PigLatin', category: AppCategoryEnum.ANGULAR },

      { number: 1, title: 'Permisos Dexter', subtitle: 'Kotlin Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/KHl2Q7iV_GhFUZ4__N_Za3FtfGrLp2SKFz4ZvkoR1FNtb4uDr9O9rn3x5wtNTv10bbA=w300-rw', image: 'https://lh3.googleusercontent.com/GTcYhrnBDtUxi3y6B6mR2Lezp6Our0miJRBwtojQeN96EJYD4vw00-WgAWq2wZKaRQ', link: 'https://play.google.com/store/apps/details?id=com.alejandrolora.seccion_06_permisos_dexter', codeLink: 'https://github.com/AL-Android-Course-Kotlin/Seccion_06_Permisos_Dexter', category: AppCategoryEnum.ANDROID_KOTLIN },

      { number: 1, title: 'MyForm', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/8X6_Pd5i3P7gQ9cJoPnHxCB9osC-9xzqoxC04sugts3qFxWqnAa9PQkZ43eMnlpE8hw=w300-rw', image: 'https://lh3.googleusercontent.com/Tb5Xb3dWA1kDdm32mGE4NGkG_XQS8setrR9EOUBIT9_gjjdetzpxgTrccUoYuDyfHtA', link: 'https://play.google.com/store/apps/details?id=com.alejandrolora.seccion_01_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_01_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 2, title: 'Fruit World', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/Sec7-OysectdaHIDejAVPA-odUzuXzb9enODANZ8nwLX5aBWephS_bPLMeeVBI0Hyg=w300-rw', image: 'https://lh3.googleusercontent.com/zeNfICFpcX1yfOQT_7lAwEaAOrtRIUkWo93lwA6jAiGdpFs0lkJFgmLAoViVkBDuqQ', link: 'https://play.google.com/store/apps/details?id=com.alejandrolora.seccion_02_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_02_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 3, title: 'Fruit World 2', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/sQQtdMkkTWSPKwvZzwZOZq6uXoq7OePU_mk33UvykUI6zhRBYzDSdh42K-hqVYywqSQ=w300-rw', image: 'https://lh3.googleusercontent.com/M7oiv-NhoioK1igAHfVVG6sKbW4ZWXFEY-_gul6w5Q-KPZFnA3IXC8ILa-ob5OSdHZ8', link: 'https://play.google.com/store/apps/details?id=com.alejandrolora.seccion_03_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_03_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 4, title: 'City World', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/Tf7N92CPILAggm--Enk89qrtuuIO4POKqL2T5crnS_erLaOckWeqRhT4X1_9p3x2TPHK=w300-rw', image: 'https://lh3.googleusercontent.com/ntbVYe1ipebXGRxpXQ-wcsR6wiiua6JbaHAWrVmjqTdzD1MSNy3KSRgJVBG3lYLt3IJe', link: 'https://play.google.com/store/apps/details?id=com.alejandrolora.seccion_04_realm_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_04_Realm_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 5, title: 'Loggy', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/g_2iCJ2YQx6LwG7KH-89R0eClvMwFmNxKpZGdZuCO-Ywl0GJugQ2CS65wRDUDrEI8Q=w300-rw', image: 'https://lh3.googleusercontent.com/fnz5puBpy53jPJRZNR9otoXKUu7IdrbU-jYYASbZM6BSZoyCYxGiL0j1s_re8xD7xQ', link: 'https://play.google.com/store/apps/details?id=com.alejandro.seccion_05_sharedpreferences_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_05_SharedPreferences_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 6, title: 'MyMail', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/zApUBGcvmAKZhl3KUSu4Wg5tZvyA6TZBaarqv6oo2zOy1onJlOlJLbjBbWwj8YCHBJFP=w300-rw', image: 'https://lh3.googleusercontent.com/EU1V5oxjthJ6JTtClyQvDiGyLnVilK-f14dk_rClXQgtB4Q1K4YJ9UGdhvLHpicaIF_r', link: 'https://play.google.com/store/apps/details?id=com.alejandro.seccion_06_fragments_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_06_Fragments_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 7, title: 'Tabby', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/6X1Q-sxCTVD-IwefRgDURgCS6h51CUhFPXx1NH3zS1Ummo25buGaW2MCStFS1KI0Rw=w300-rw', image: 'https://lh3.googleusercontent.com/a5Z3BFpbdveuzbjeMdK3hX5BJZzQIk1sWxPsElTAJ2ItXAufl96J7XRb4AXjZlwHTQ', link: 'https://play.google.com/store/apps/details?id=com.alejandro.seccion_07_tabs_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_07_Toolbar_Tabs_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 8, title: 'Menufy', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/L44UrsK8gXsntZYzhCM7cfo6clG7GQI669QGtPvE57ygjT53tWM8aEBCxIBQIcsffFA=w300-rw', image: 'https://lh3.googleusercontent.com/z8pPxAfhplgRz5N9xoFpy0UWe_o3ceMSUZpKVuTcZ6vBbQE9JJmZQ4I4ICh7ZrZ8FTQ', link: 'https://play.google.com/store/apps/details?id=com.alejandro.seccion_08_navigation_drawer_lab', codeLink: 'https://github.com/AL-Android-Course/Seccion_08_Navigation_Drawer_Lab', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 9, title: 'Picasso Gallery', subtitle: 'Android Course', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/QSDb7_sR1BHJnuIwhNKn38oKEumPrY20zNfH7o3XNkdJaevPVP4fNp9nlHbvTNnZ0RNJ=w300-rw', image: 'https://lh3.googleusercontent.com/3QJcp0Wqx3VEUY4eyZGhSUtxOdUWVG4-g8SeKD_RQVknfclQD3PqQ5Qa8bXynSfQVQ', link: 'https://play.google.com/store/apps/details?id=com.bonusuno.alejandro.bonus_picasso', codeLink: 'https://github.com/AL-Android-Course/Bonus_Picasso', category: AppCategoryEnum.ANDROID_JAVA },
      { number: 10, title: 'DevHub', subtitle: 'Final Studies App', description: 'Description not available yet.', icon: 'https://lh3.googleusercontent.com/POotrvyNl8FcdGc0epeTZ6QGB7vtIJ21rr_Ff4AeKCWf3hldEEaL_SGX2vLm47oYz0o=w300-rw', image: 'https://lh3.googleusercontent.com/IWD5udXObevieNV1_QIEIjExB0UmYfaV_FG_yYqujQk_uCUridS8TnuR9B-Sx8F1odI', link: 'https://play.google.com/store/apps/details?id=es.alejandrolora.devhub', codeLink: 'https://github.com/AL-Android/DevHub', category: AppCategoryEnum.ANDROID_JAVA }

    ];

    apps.forEach((app) => collection.add(app));
  }

  private importCoursesTable() {
    const collection: AngularFirestoreCollection<ICourse> = this._angularFirestore.collection(DBTableEnum.Courses);

    const courses: ICourse[] = [
      { number: 1, title: 'Aprendiendo Android desde 0', subtitle: '+26.000 students enrolled', role: 'Intrusctor', rate: 4.5, language: 'Spanish', description: 'Description not available yet.', icon: 'https://udemy-images.udemy.com/course/240x135/957106_270f_6.jpg', image: 'https://firebasestorage.googleapis.com/v0/b/website-b882d.appspot.com/o/androidcourse.jpg?alt=media&token=9c4b00f1-7235-4f81-bbd0-c87483b701f4', link: 'https://www.udemy.com/programacion-de-android-desde-cero/', codeLink: 'https://github.com/AL-Android-Course' },
      { number: 2, title: 'Programación Android en Kotlin', subtitle: '+500 students enrolled', role: 'Intrusctor', rate: 4.5, language: 'Spanish', description: 'Description not available yet.', icon: 'https://udemy-images.udemy.com/course/240x135/1325930_f5f6_3.jpg', image: 'https://firebasestorage.googleapis.com/v0/b/website-b882d.appspot.com/o/kotlincourse.jpg?alt=media&token=198c7238-9209-495c-9c68-7d64fb45d3ff', link: 'https://www.udemy.com/programacion-android-kotlin/', codeLink: 'https://github.com/AL-Android-Course-Kotlin' }
    ];

    courses.forEach((course) => collection.add(course));
  }

  private importBooksTable() {
    const collection: AngularFirestoreCollection<IBook> = this._angularFirestore.collection(DBTableEnum.Books);

    const books: IBook[] = [
      { number: 1, title: 'Learning TypeScript 2.x - Second Edition', subtitle: 'Recently published!', role: 'Reviewer', rate: 4, language: 'English', description: 'Description not available yet.', icon: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B08005_MockupCoverfdf.png', image: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B08005_MockupCoverfdf.png', link: 'http://www.learningtypescript.com/', codeLink: 'https://github.com/remojansen/LearningTypeScript' }
    ];

    books.forEach((book) => collection.add(book));
  }

}
