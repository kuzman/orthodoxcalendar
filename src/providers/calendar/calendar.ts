import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CalendarProvider {

  constructor(public http: Http) {
  }


  /**
   * 
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getVeligden(year) {
    let a = year % 19;
    let b = year % 7;
    let c = year % 4;

    let d = (19 * a + 16) % 30;
    let e = (2 * c + 4 * b + 6 * d) % 7;
    let f = (19 * a + 16) % 30;
    let key = f + e + 3;

    let month = (key > 30) ? 5 : 4;
    let day = (key > 30) ? key - 30 : key;
    return year + '-' + month + '-' + day;
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getVeligdenVtorden(year) {
    let veligden = this.getVeligden(year).split('-');
    let veligdenVtorDen = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2] + 1));
    return year + '-' + (veligdenVtorDen.getMonth() + 1) + '-' + veligdenVtorDen.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getVeligdenTretDen(year) {
    let veligden = this.getVeligden(year).split('-');
    let veligdenTretDen = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2] + 2));
    return year + '-' + (veligdenTretDen.getMonth() + 1) + '-' + veligdenTretDen.getDate();
  }
}
