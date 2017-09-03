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
  header = '';
  dayDescription = '';
  constructor(public navCtrl: NavController, private translate: TranslateService, private calendar: CalendarProvider) {
    let month = new Date().getMonth() + 1;
    calendar.loadMonth(month)
    .then(data => {
      calendar.loadDay(this.day, month)
      .then(dayData => {
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
  }
}
