import { Injectable } from '@angular/core';

@Injectable()
export class PrazniciProvider {

  constructor() {
  }

  veligdenDatum = [];
  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getVeligden(year) {
    if(Number(this.veligdenDatum[0]) === year) {
      return this.veligdenDatum[0] + '-' + this.veligdenDatum[1] + '-' + this.veligdenDatum[2];
    } else {
      let a = year % 19;
      let b = year % 7;
      let c = year % 4;

      let d = (19 * a + 16) % 30;
      let e = (2 * c + 4 * b + 6 * d) % 7;
      let f = (19 * a + 16) % 30;
      let key = f + e + 3;

      let month = (key > 30) ? 5 : 4;
      let day = (key > 30) ? key - 30 : key;
      this.veligdenDatum = [];
      this.veligdenDatum[0] = year;
      this.veligdenDatum[1] = month;
      this.veligdenDatum[2] = day;
      return year + '-' + month + '-' + day;
    }
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
    let veligdenVtorDen = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) + 1);
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
    let veligdenTretDen = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) + 2);
    return year + '-' + (veligdenTretDen.getMonth() + 1) + '-' + veligdenTretDen.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getSpasovDen(year) {
    let veligden = this.getVeligden(year).split('-');
    let spasovden = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) + 40);
    return year + '-' + (spasovden.getMonth() + 1) + '-' + spasovden.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getProchka(year) {
    let veligden = this.getVeligden(year).split('-');
    let prochka = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) - 51);
    return year + '-' + (prochka.getMonth() + 1) + '-' + prochka.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getTodorovaSabota(year) {
    let veligden = this.getVeligden(year).split('-');
    let todorovaSabota = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) - 42);
    return year + '-' + (todorovaSabota.getMonth() + 1) + '-' + todorovaSabota.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getLazarovaSabota(year) {
    let veligden = this.getVeligden(year).split('-');
    let lazarovaSabota = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) - 42);
    return year + '-' + (lazarovaSabota.getMonth() + 1) + '-' + lazarovaSabota.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getCvetnici(year) {
    let veligden = this.getVeligden(year).split('-');
    let cvetnici = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) - 7);
    return year + '-' + (cvetnici.getMonth() + 1) + '-' + cvetnici.getDate();
  }

  public getVeligdenskiPosti(year) {
    let veligden = this.getVeligden(year).split('-');
    let veligdenskiPosti = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) - 50);
    return year + '-' + (veligdenskiPosti.getMonth() + 1) + '-' + veligdenskiPosti.getDate();
  }

  public getPetroviPosti(year) {
    let veligden = this.getVeligden(year).split('-');
    let petroviPosti = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) + 57);
    return year + '-' + (petroviPosti.getMonth() + 1) + '-' + petroviPosti.getDate();
  }

  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getDuhovDen(year) {
    let veligden = this.getVeligden(year).split('-');
    let duhovDen = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) + 49);
    return year + '-' + (duhovDen.getMonth() + 1) + '-' + duhovDen.getDate();
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getZadushnicaZimska(year) {
    let veligden = this.getVeligden(year).split('-');
    let zadushnicaZimska = new Date(Number(veligden[0]), Number(veligden[1]) - 1, Number(veligden[2]) - 59);
    return year + '-' + (zadushnicaZimska.getMonth() + 1) + '-' + zadushnicaZimska.getDate();
  }

  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getZadushnicaNoemvri(year) {
    let zadushnicaNoemvri = new Date(year, 10, 1);
    if (zadushnicaNoemvri.getDay() === 5) {
      return year + '-11-1';
    } else {
      for (let i=2; i<7; i++) {
        zadushnicaNoemvri = new Date(year, 10, i);
        if (zadushnicaNoemvri.getDay() === 5) {
          return year + '-11-1';
        }
      }
    }
  }

}
