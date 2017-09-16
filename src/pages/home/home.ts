import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { CalendarProvider } from '../../providers/calendar/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mesec;
  movingDate = new Date();
  year = this.movingDate.getFullYear();
  day = this.movingDate.getDate();
  dayInWeek = this.movingDate.getDay();
  title_regular = '';
  title_important = '';
  dayDescription = '';
  days = [];
  constructor(public navCtrl: NavController, private translate: TranslateService, private calendar: CalendarProvider) {
    // this.goToToday();
  }

  ionViewWillEnter() {
    this.goToToday();
  }

  /**
   *
   *
   * @param {any} dayData
   * @memberof HomePage
   */
  loadHeader(dayData) {
    this.title_important = '';
    this.title_regular = '';
    this.dayInWeek = this.movingDate.getDay();
    let th = this.translate.instant('th');
    let dayOfWeek = this.calendar.getDayOfWeek(this.dayInWeek);
    this.mesec = this.calendar.getMesecName((this.movingDate.getMonth()));
    this.day = this.movingDate.getDate();
    let dayInYear = dayData.id;
    this.dayDescription = dayOfWeek + ', ' + dayInYear + th;
    for(let i=0; i<dayData.holydays.length; i++) {
      if (this.dayInWeek === 0) {
        this.title_important += dayData.holydays[i].title + ';';
      } else {
        if(dayData.holydays[i].important) {
          this.title_important += dayData.holydays[i].title + ';';
        } else {
          this.title_regular += dayData.holydays[i].title + ';';
        }
      }
    }
  }

  /**
   *
   *
   * @memberof HomePage
   */
  goToToday() {
    this.movingDate = new Date();
    this.year = this.movingDate.getFullYear();
    this.calendar.setYear(this.year);
    let month = this.movingDate.getMonth() + 1;
    this.calendar.loadMonth(month)
    .then(data => {
      // this.calendar.setCurrentMonth(data);
      this.loadDayData();
    });
  }

  /**
   *
   *
   * @memberof HomePage
   */
  loadDayData() {
    this.year = this.movingDate.getFullYear();
    this.calendar.setYear(this.year);
    this.day = this.movingDate.getDate();
    this.calendar.loadDay(this.movingDate.getDate(), this.movingDate.getMonth() +1)
    .then(dayData => {
      this.days = dayData.holydays;
      this.loadHeader(dayData);
    });
  }

  /**
   *
   *
   * @memberof HomePage
   */
  previousDay() {
    this.movingDate.setDate(this.movingDate.getDate() - 1);
    this.loadDayData();
  }

  /**
   *
   *
   * @memberof HomePage
   */
  nextDay() {
    this.movingDate.setDate(this.movingDate.getDate() + 1);
    this.loadDayData();
  }

  /**
   *
   *
   * @param {any} event
   * @memberof HomePage
   */
  swipeEvent(event) {
    // from left to right then the delta is positive
    if (event.deltaX > 0) {
      this.previousDay();
    } else {
      this.nextDay();
    }
  }
}
