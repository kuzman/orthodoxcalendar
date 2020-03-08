import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

import { PrazniciProvider } from '../praznici/praznici';

interface CalendarData {
  days: any;
}

@Injectable()
export class CalendarProvider {

  path = 'assets/months_' + this.translate.currentLang + '/';

  public month: any;
  // current_month: any;
  year: Number;
  meseci = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
  denovi = ['ned', 'pon', 'vtor', 'sred', 'cet', 'pet', 'sab'];
  constructor(private http: HttpClient, private translate: TranslateService, private praznici: PrazniciProvider) {
  }

  public setMonthCache(month) {
    this.month = month;
  }

  public clearMonthCache() {
    this.month = null;
  }

  public setPath(lang) {
    this.path = 'assets/months_' + lang + '/';
  }

  public setYear(year) {
    this.year = year;
  }

  // public setCurrentMonth(month) {
  //   if(!this.current_month) {
  //     this.current_month = month;
  //   }
  // }

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
          this.http.get<CalendarData>(this.path + month + '.json')
          .subscribe(data => {
            if (!this.isLeapYear(this.year) && month===2) {
              data.days = data.days.slice(0, data.days.length - 1);
            } else {
              if (month > 2) {
                for (let i=0; i<data.days.length; i++) {
                  if (month === 3 && this.isLeapYear(this.year) && i < 13) {
                    if (i < 12) {
                    data.days[i] = data.days[i+1];
                    data.days[i].day = data.days[i].day - 1; // se pomestuvaat do 12ti mart i posle misteriozno ischeznuva eden praznik
                    } else if (i === 12) {
                      if (this.path.indexOf('_mk') !== -1) {
                        data.days[i]={
                          "day": "13",
                          "holydays": [{
                            "title": "Преподобен Јован Касијан",
                            "important": false,
                            "desc": "Овој голем духовник се роди во Рим од угледни родители. Во младоста ги изучи сите светски науки, особено философијата и астрономијата. Потоа сиот се предаде на изучување на Светото Писмо. Вдавајќи се од добро на подобро и сакајќи с ? поголем степен на совршенство, Касијан замина од Рим за Цариград за лично да го види и чуе Свети Јован Златоуст. Златоуст го поучи и го посвети за ѓакон. Откако многу се исползува со мудроста на Светиот Златоуст, се упати понатаму на Исток за уште повеќе да се поучува и усовршува. Најмногу се задржа во Мисир, во Нитрија, меѓу прочуените духовни атлети, од кои се научи на вежбање во сите добродетели. Најпосле повторно се врати на Запад и се насели во градот Марсеј. Овде основа два манастири, еден машки и еден женски. На молба на монасите напиша повеќе списи од кои особено полезен за љубителите на духовниот живот е: „Осум книги за борбата против осумте главни страсти“. Особено важен е неговиот спис против еретикот Несториј. Касијан го напиша тој спис на молба на архиѓаконот Лав. Му послужи верно на Господ и се пресели во вечниот живот во 435 година. Моштите на Свети Касијан и денес почиваат во Марсеј."
                          }, {
                            "title": " Преподобен Варсонуфиј",
                            "important": false,
                            "desc": "Родум од Палестина. Роден како незнабожец, а се крсти во својата осумнаесетта година и веднаш се замонаши и го доби името Јован. Кога се прочу со својот добродетелен живот, го избраа за архиепископ на Дамаск. Но не остана долго на таа положба. Жеднеејќи по осамен духовен подвиг тајно го напушти Дамаск и отиде во Нитриската пустина. Овде се пријави под името монах Варсонуфиј и веднаш го доби послушанието на манастирски водоносец. Некогашниот архиепископ ова послушание го прими со радост. Со своето расудување и со другите вредни добродетели наскоро им стана пример на сите монаси. Дури пред смртта на монасите им беше откриено кој е тој. И така овој светител послужи со својот пример за укор на гордите и властољубивите, а за утеха на смирените и кротките. Се упокои мирно во 457 година."
                          }],
                          "id": 72
                        }
                      } else if (this.path.indexOf('_en') !== -1) {
                        data.days[i]={
                          "day": "13",
                          "holydays": [{
                            "title": "Venerable John Cassian the Roman, abbot",
                            "important": false,
                            "desc": ""
                          }, {
                            "title": " Venerable John, called Barsanuphius",
                            "important": false,
                            "desc": ""
                          }],
                          "id": 72
                        }
                      }
                    }
                  } else {
                    data.days[i].id = data.days[i].id + 1;
                  }
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
      if (praznici.hasOwnProperty(key) && !day.holydays.find(holyday => holyday.key === key)) {
        switch(key) {
          case 'zadushnica_zimska':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('zadushnica_zimska'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'prochka':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('prochka'),
                important: true,
                desc: this.translate.instant('praznik_prochka')
              });
            }
            break;
          case 'veligdenski_posti':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('veligdenski_posti'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'todorovaSabota':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('todorovaSabota'),
                important: true,
                desc: this.translate.instant('praznik_todorovaSabota')
              });
            }
            break;
          case 'lazarovaSabota':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('lazarovaSabota'),
                important: true,
                desc: this.translate.instant('praznik_lazarovaSabota')
              });
            }
            break;
          case 'cvetnici':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('cvetnici'),
                important: true,
                desc: this.translate.instant('praznik_cvetnici')
              });
            }
            break;
          case 'velikiChetvrtok':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('velikiChetvrtok'),
                important: true,
                desc: this.translate.instant('praznik_velikiChetvrtok')
              });
            }
            break;
          case 'velikiPetok':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('velikiPetok'),
                important: true,
                desc: this.translate.instant('praznik_velikiPetok')
              });
            }
            break;
          case 'velikaSabota':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('velikaSabota'),
                important: true,
                desc: this.translate.instant('praznik_velikaSabota')
              });
            }
            break;
          case 'veligden':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('veligden'),
                important: true,
                desc: this.translate.instant('praznik_veligden')
              });
            }
            break;
          case 'veligden_2':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('veligden_2'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'veligden_3':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('veligden_3'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'istochenPetok':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('istochenPetok'),
                important: true,
                desc: this.translate.instant('praznik_istochenPetok')
              });
            }
            break;
          case 'spasovden':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('spasovden'),
                important: true,
                desc: this.translate.instant('praznik_spasovden')
              });
            }
            break;
          case 'duovden':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('duovden'),
                important: true,
                desc: this.translate.instant('praznik_duovden')
              });
            }
            break;
          case 'duovden2':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('duovden2'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'duovden3':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('duovden3'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'petroviPosti':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
                title: this.translate.instant('petroviPosti'),
                important: true,
                desc: ""
              });
            }
            break;
          case 'zadushnica_noemvri':
            if(dateToCompare.valueOf() === praznici[key].valueOf()){
              day.holydays.push({
                key: key,
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
