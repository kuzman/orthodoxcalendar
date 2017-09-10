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
  daysData = {
    dayOfWeek: '',
    date_greg: 0,
    date_julian: 0,
    title: {
      part_title_important: '',
      part_title_regular: ''
    }
  };
  tabData = [];
  year = this.movingDate.getFullYear();

  constructor(public navCtrl: NavController, private calendar: CalendarProvider) {
    this.loadGridData();
  }

  loadGridData() {
    this.year = this.movingDate.getFullYear();
    this.calendar.setYear(this.year);
    this.calendar.loadMonth(this.movingDate.getMonth() + 1)
    .then(data => {
      this.mesec = this.calendar.getMesecName((this.movingDate.getMonth()));
      this.tabData = [];
      for(let i=0; i<data.days.length;i++) {
        this.daysData = {
          dayOfWeek: '',
          date_greg: 0,
          date_julian: 0,
          title: {
            part_title_important: '',
            part_title_regular: ''
          }
        };
        let date = new Date (this.movingDate.getFullYear(), this.movingDate.getMonth(), data.days[i].day);
        this.daysData.dayOfWeek = this.calendar.getDayOfWeek(date.getDay()).substring(0, 3);
        this.daysData.date_greg = data.days[i].day;
        for(let j =0; j<data.days[i].holydays.length; j++) {
          if (date.getDay() === 0) {
            this.daysData.title.part_title_important += data.days[i].holydays[j].title + ';';
          } else {
            if(data.days[i].holydays[j].important) {
              this.daysData.title.part_title_important += data.days[i].holydays[j].title + ';';
            } else {
              this.daysData.title.part_title_regular += data.days[i].holydays[j].title + ';';
            }
          }
        }
        date.setDate(date.getDate() - 13);
        this.daysData.date_julian = date.getDate();
        this.tabData.push(this.daysData);
      }
    })
  }

  previousMonth() {
    this.movingDate.setMonth(this.movingDate.getMonth() - 1);
    this.loadGridData();
  }

  nextMonth() {
    this.movingDate.setMonth(this.movingDate.getMonth() + 1);
    this.loadGridData();
  }

  swipeEvent(event) {
    // from left to right then the delta is positive
    if (event.deltaX > 0) {
      this.previousMonth();
    } else {
      this.nextMonth();
    }
  }
}
