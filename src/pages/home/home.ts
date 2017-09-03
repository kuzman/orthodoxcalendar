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
  year = new Date().getFullYear();
  day = new Date().getDate();
  dayInWeek = new Date().getDay();
  title_regular = '';
  title_important = '';
  dayDescription = '';
  days = [];
  constructor(public navCtrl: NavController, private translate: TranslateService, private calendar: CalendarProvider) {
    let month = new Date().getMonth() + 1;
    calendar.loadMonth(month)
    .then(data => {
      calendar.loadDay(this.day, month)
      .then(dayData => {
        this.days = dayData.holydays;
        this.leadHeader(dayData);
      })
    })
  }

  leadHeader(dayData) {
    let th = this.translate.instant('th');
    let dayOfWeek = this.calendar.getDayOfWeek(this.dayInWeek);
    this.mesec = this.calendar.getMesecName((new Date().getMonth()));
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
}
