import { Injectable } from '@angular/core';

@Injectable()
export class PrazniciProvider {

  constructor() {
  }

  veligdenDatum: Date;

  /**
   * Algorithm for calculation of the Orthodox Easter. Accurate till 2400
   *
   * @param {any} year
   * @returns {Date}
   * @memberof PrazniciProvider
   */
  public getVeligden(year): Date {
    if(this.veligdenDatum && this.veligdenDatum.getFullYear() === year) {
      return this.veligdenDatum;
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
      this.veligdenDatum = new Date(year, month-1, day);
      return this.veligdenDatum;;
    }
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getVeligdenVtorden(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 1);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getVeligdenTretDen(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 2);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getSpasovDen(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 39);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getProchka(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 49);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getTodorovaSabota(year) : Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 43);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getLazarovaSabota(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 8);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getCvetnici(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 7);
  }

  public getVelikiChetvrtok(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 3);
  }

  public getVelikiPetok(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 2);
  }

  public getVelikaSabota(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 1);
  }

  public getIstochenPetok(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 5);
  }

  public getVeligdenskiPosti(year) {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 48);
  }

  public getPetroviPosti(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 57);
  }

  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getDuhovDen(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 49);
  }

  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getDuhovDen2(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 50);
  }

  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getDuhovDen3(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() + 51);
  }


  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getZadushnicaZimska(year): Date {
    let veligden = this.getVeligden(year);
    return new Date(year, veligden.getMonth(), veligden.getDate() - 57);
  }

  /**
   *
   *
   * @param {any} year
   * @returns
   * @memberof CalendarProvider
   */
  public getZadushnicaNoemvri(year): Date {
    let zadushnicaNoemvri = new Date(year, 10, 1);
    if (zadushnicaNoemvri.getDay() === 6) {
      return zadushnicaNoemvri;
    } else {
      for (let i=2; i<8; i++) {
        zadushnicaNoemvri = new Date(year, 10, i);
        if (zadushnicaNoemvri.getDay() === 6) {
          return zadushnicaNoemvri;
        }
      }
    }
  }

  public getYearMovingHolydays(year) {
    return {
      zadushnica_zimska: this.getZadushnicaZimska(year).setHours(0, 0, 0, 0),
      prochka: this.getProchka(year).setHours(0, 0, 0, 0),
      veligdenski_posti: this.getVeligdenskiPosti(year).setHours(0, 0, 0, 0),
      todorovaSabota: this.getTodorovaSabota(year).setHours(0, 0, 0, 0),
      lazarovaSabota: this.getLazarovaSabota(year).setHours(0, 0, 0, 0),
      cvetnici: this.getCvetnici(year).setHours(0, 0, 0, 0),
      velikiChetvrtok: this.getVelikiChetvrtok(year).setHours(0, 0, 0, 0),
      velikiPetok: this.getVelikiPetok(year).setHours(0, 0, 0, 0),
      velikaSabota: this.getVelikaSabota(year).setHours(0, 0, 0, 0),
      veligden: this.getVeligden(year).setHours(0, 0, 0, 0),
      veligden_2: this.getVeligdenVtorden(year).setHours(0, 0, 0, 0),
      veligden_3: this.getVeligdenTretDen(year).setHours(0, 0, 0, 0),
      istochenPetok: this.getIstochenPetok(year).setHours(0, 0, 0, 0),
      spasovden: this.getSpasovDen(year).setHours(0, 0, 0, 0),
      duovden: this.getDuhovDen(year).setHours(0, 0, 0, 0),
      duovden2: this.getDuhovDen2(year).setHours(0, 0, 0, 0),
      duovden3: this.getDuhovDen3(year).setHours(0, 0, 0, 0),
      petroviPosti: this.getPetroviPosti(year).setHours(0, 0, 0, 0),
      zadushnica_noemvri: this.getZadushnicaNoemvri(year).setHours(0, 0, 0, 0)
    }
  }

}
