import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { CalendarProvider } from '../../providers/calendar/calendar';

@Component({
  selector: 'page-mesec',
  templateUrl: 'mesec.html'
})
export class MesecPage {
  mesec;
  movingDate = new Date();
  year = this.movingDate.getFullYear();
  daysData = {
    year: this.year,
    month: this.movingDate.getMonth(),
    dayOfWeek: '',
    date_greg: 0,
    date_julian: 0,
    title: {
      part_title_important: '',
      part_title_regular: ''
    }
  };
  tabData = [];

  constructor(public navCtrl: NavController, private calendar: CalendarProvider, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.movingDate = new Date();
    this.loadGridData();
  }

  openModal(date) {
    let modal = this.modalCtrl.create(ModalDayPage, date);
    modal.present();
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
          year: this.year,
          month: this.movingDate.getMonth(),
          dayOfWeek: '',
          date_greg: 0,
          date_julian: 0,
          title: {
            part_title_important: '',
            part_title_regular: ''
          }
        };
        this.calendar.handleMovingHolyday(data.days[i]);
        let date = new Date (this.movingDate.getFullYear(), this.movingDate.getMonth(), data.days[i].day);
        this.daysData.dayOfWeek = this.calendar.getDayOfWeek(date.getDay()).substring(0, 3);
        this.daysData.date_greg = data.days[i].day;
        for(let j =0; j<data.days[i].holydays.length; j++) {
          if (date.getDay() === 0) {
            this.daysData.title.part_title_important += data.days[i].holydays[j].title + '; ';
          } else {
            if(data.days[i].holydays[j].important) {
              this.daysData.title.part_title_important += data.days[i].holydays[j].title + '; ';
            } else {
              this.daysData.title.part_title_regular += data.days[i].holydays[j].title + '; ';
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

@Component({
  templateUrl: 'modal-day.html'
})
export class ModalDayPage {
  year;
  month;
  day;
  dayInWeek;
  mesec;
  days=[]
  title_regular = '';
  title_important = '';
  dayDescription = '';

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, private calendar: CalendarProvider, private translate: TranslateService) {
    this.year = this.params.get('year');
    this.month = this.params.get('month');
    this.day = this.params.get('day');
    this.dayInWeek = new Date(this.year, this.month, this.day).getDay();
    this.mesec = this.calendar.getMesecName((this.month));
    this.calendar.loadMonth(this.month)
    .then(data => {
      this.loadDayData();
    });
  }

  loadDayData() {
    this.calendar.loadDay(this.day, this.month +1)
    .then(dayData => {
      this.days = dayData.holydays;
      this.loadHeader(dayData);
    });
  }

  loadHeader(dayData) {
    this.title_important = '';
    this.title_regular = '';
    let th = this.translate.instant('th');
    let dayOfWeek = this.calendar.getDayOfWeek(this.dayInWeek);
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

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
