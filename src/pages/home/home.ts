import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { CalendarProvider } from '../../providers/calendar/calendar'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meseci = ['jan', 'fev', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sept', 'okt', 'nov', 'dek'];
  mesec = this.meseci[(new Date().getMonth())]
  year = new Date().getFullYear();
  day = new Date().getDate();
  header = '';
  constructor(public navCtrl: NavController, translate: TranslateService, private calendar: CalendarProvider) {
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

  }
}
