import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalendarProvider } from '../../providers/calendar/calendar';

@Component({
  selector: 'page-mesec',
  templateUrl: 'mesec.html'
})
export class MesecPage {
  mesec;
  movingDate = new Date();
  tabData = {
    dayOfWeek: '',
    date_greg: '',
    date_julian: '',
    title: ''
  }
  year = this.movingDate.getFullYear();
  constructor(public navCtrl: NavController, private calendar: CalendarProvider) {
    this.loadGridData();
  }

  loadGridData() {
    this.calendar.loadMonth(this.movingDate.getMonth() + 1)
    .then(data => {
      this.mesec = this.calendar.getMesecName((this.movingDate.getMonth()));
    })
  }
}
