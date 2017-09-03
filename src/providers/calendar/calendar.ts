import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class CalendarProvider {
  path = 'assets/months_';
  public month: any;
  meseci = ['jan', 'fev', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
  denovi = ['pon', 'vtor', 'sred', 'cet', 'pet', 'sab', 'ned'];
  constructor(private http: Http, private translate: TranslateService) {
    this.path = this.path + translate.currentLang + '/';
  }

  public setMonthCache(month) {
    this.month = month;
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
   * @param {Number} day
   * @param {Number} month
   * @returns {Promise<any>}
   * @memberof CalendarProvider
   */
  public loadDay(day: Number, month: Number): Promise<any> {
    if (day>0 && day<32) {
      if (this.month.month === month) {
        return Promise.resolve(this.month.days[Number(day)-1]);
      } else {
        return new Promise(resolve => {
          this.loadMonth(month)
          .then(data => {
            resolve(data.month.days[Number(day)-1]);
          })
        })
      }
    } else {
      return Promise.reject("Requested day '" + day + "' is not OK");
    }
    // TODO: manage Feb 29
  }

  public getDayOfWeek(day) {
    let key = this.denovi[day];
    return this.translate.instant(key);
  }

  public getMesecName(mesec) {
    let key = this.meseci[mesec];
    return this.translate.instant(key);
  }
}
