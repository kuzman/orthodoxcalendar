import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { CalendarProvider } from '../../providers/calendar/calendar'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mesec;
  currentDate = new Date();
  movingDate = new Date();
  year = this.movingDate.getFullYear();
  day = this.movingDate.getDate();
  dayInWeek = this.movingDate.getDay();
  title_regular = '';
  title_important = '';
  dayDescription = '';
  days = [];
  constructor(public navCtrl: NavController, private translate: TranslateService, private calendar: CalendarProvider) {
    let month = this.currentDate.getMonth() + 1;
    calendar.loadMonth(month)
    .then(data => {
      calendar.setCurrentMonth(data);
      calendar.loadDay(this.day, month)
      .then(dayData => {
        this.days = dayData.holydays;
        this.leadHeader(dayData);
      })
    })
  }


  /**
   * 
   * 
   * @param {any} dayData 
   * @memberof HomePage
   */
  leadHeader(dayData) {
    this.dayInWeek = this.movingDate.getDay();
    this.title_important = '';
    this.title_regular = '';
    let th = this.translate.instant('th');
    let dayOfWeek = this.calendar.getDayOfWeek(this.dayInWeek);
    this.mesec = this.calendar.getMesecName((this.movingDate.getMonth()));
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
   * @memberof HomePage
   */
  loadDayData() {
    if (this.currentDate.getMonth() === this.movingDate.getMonth()) {
      this.calendar.loadDay(this.movingDate.getDate(), this.movingDate.getMonth() +1)
      .then(dayData => {
        this.days = dayData.holydays;
        this.leadHeader(dayData);
      });
    } else {
      let month = this.movingDate.getMonth() + 1;
      this.calendar.loadMonth(month)
      .then(data => {
        this.calendar.loadDay(this.movingDate.getDate(), month)
        .then(dayData => {
          this.days = dayData.holydays;
          this.leadHeader(dayData);
        });
      });
    }
    this.year = this.movingDate.getFullYear();
    this.day = this.movingDate.getDate();
  }
}
