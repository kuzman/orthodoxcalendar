import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';

import { PrazniciProvider } from '../praznici/praznici';


@Injectable()
export class CalendarProvider {
  path = 'assets/months_';
  public month: any;
  current_month: any;
  year: Number;
  meseci = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
  denovi = ['ned', 'pon', 'vtor', 'sred', 'cet', 'pet', 'sab'];
  constructor(private http: Http, private translate: TranslateService, private praznici: PrazniciProvider) {
    this.path = this.path + translate.currentLang + '/';
  }

  public setMonthCache(month) {
    this.month = month;
  }

  public setYear(year) {
    this.year = year;
  }

  public setCurrentMonth(month) {
    if(!this.current_month) {
      this.current_month = month;
    }
  }

  /**
   *
   *
   * @param {Number} month
   * @returns {Promise<any>}
   * @memberof CalendarProvider
   */
  public loadMonth(month: Number): Promise<any> {
    if (month > 0 && month <13) {
      if(this.month && this.month.month === month) {
      return Promise.resolve(this.month);
      } else {
        return new Promise(resolve => {
          this.http.get(this.path + month + '.json')
          .map(response => response.json()).subscribe(data => {
            if (!this.isLeapYear(this.year) && month==2) {
              data.days = data.days.slice(0, data.days.length - 1);
            } else {
              if (month > 2) {
                for (let i=0; i<data.days.length; i++) {
                  data.days[i].id = data.days[i].id + 1;
                }
              }
            }
            this.setMonthCache(data);
            resolve(data);
          });
        })
      }
    } else {
      return Promise.reject("Requested month '" + month + "' is not OK");
    }
  }

  /**
   *
   *
   * @param {any} year
   * @returns {Boolean}
   * @memberof CalendarProvider
   */
  isLeapYear(year): Boolean {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  /**
   *
   *
   * @param {Number} day
   * @param {Number} month
   * @returns {Promise<any>}
   * @memberof CalendarProvider
   */
  public loadDay(day: Number, month: Number): Promise<any> {
    if (day>0 && day<32) {
      if (this.month.month === month) {
        this.handleMovingHolyday(this.month.days[Number(day)-1]);
        return Promise.resolve(this.month.days[Number(day)-1]);
      } else {
        return new Promise(resolve => {
          this.loadMonth(month)
          .then(data => {
            this.handleMovingHolyday(data.days[Number(day)-1]);
            resolve(data.days[Number(day)-1]);
          })
        })
      }
    } else {
      return Promise.reject("Requested day '" + day + "' is not OK");
    }
    // TODO: manage Feb 29
  }

  /**
   *
   *
   * @param {any} day
   * @returns {String}
   * @memberof CalendarProvider
   */
  public getDayOfWeek(day): String {
    let key = this.denovi[day];
    return this.translate.instant(key);
  }

  /**
   *
   *
   * @param {any} mesec
   * @returns {String}
   * @memberof CalendarProvider
   */
  public getMesecName(mesec): String {
    let key = this.meseci[mesec];
    return this.translate.instant(key);
  }

  public handleMovingHolyday(day) {
    let praznici = this.praznici.getYearMovingHolydays(this.year);
    let dateToCompare = new Date(Number(this.year), Number(this.month.month) - 1, Number(day.day)).setHours(0, 0, 0, 0);
    for (let key in praznici) {
      if (praznici.hasOwnProperty(key)) {
        switch(key) {
          case 'zadushnica_zimska':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('zadushnica_zimska'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'prochka':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('prochka'),
                important: true,
                desc: this.translate.instant('praznik_prochka')
              });
            }
            break;
          case 'veligdenski_posti':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('veligdenski_posti'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'todorova_sabota':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('todorovaSabota'),
                important: true,
                desc: this.translate.instant('praznik_todorovaSabota')
              });
            }
            break;
          case 'lazarova_sabota':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('lazarovaSabota'),
                important: true,
                desc: this.translate.instant('praznik_lazarovaSabota')
              });
            }
            break;
          case 'cvetnici':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('cvetnici'),
                important: true,
                desc: this.translate.instant('praznik_cvetnici')
              });
            }
            break;
          case 'velikiChetvrtok':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('velikiChetvrtok'),
                important: true,
                desc: this.translate.instant('praznik_velikiChetvrtok')
              });
            }
            break;
          case 'veliliPetok':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('veliliPetok'),
                important: true,
                desc: this.translate.instant('praznik_velikiPetok')
              });
            }
            break;
          case 'velikaSabota':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('velikaSabota'),
                important: true,
                desc: this.translate.instant('praznik_velikaSabota')
              });
            }
            break;
          case 'veligden':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('veligden'),
                important: true,
                desc: this.translate.instant('praznik_veligden')
              });
            }
            break;
          case 'veligden_2':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('veligden_2'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'veligden_3':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('veligden_3'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'istochen_petok':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('istochenPetok'),
                important: true,
                desc: this.translate.instant('praznik_istochenPetok')
              });
            }
            break;
          case 'spasovden':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('spasovden'),
                important: true,
                desc: this.translate.instant('praznik_spasovden')
              });
            }
            break;
          case 'duhovden':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('duovden'),
                important: true,
                desc: this.translate.instant('praznik_duovden')
              });
            }
            break;
          case 'duovden2':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('duovden2'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'duovden3':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('duovden3'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'petrovi_posti':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('petroviPosti'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'zadushnica_noemvri':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                title: this.translate.instant('zadushnica_noemvri'),
                important: true,
                desc: ""
              });
            }
            break;
          default:
            break;
        }
      }
    }
  }
}
