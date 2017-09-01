import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class CalendarProvider {
  path = 'assets/months_';
  public month: any;
  constructor(private http: Http, translate: TranslateService) {
    this.path = this.path + translate.currentLang + '/';
  }

  public setMonthCache(month) {
    this.month = month;
  }

  public loadMonth(month): Promise<any> {
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

  public loadDay(day, month): Promise<any> {
    if (day>0 && day<32) {
      if (this.month.month === month) {
        return Promise.resolve(this.month.days.filter(dayInArray => {
          dayInArray.id === day;
        }));
      } else {
        return new Promise(resolve => {
          this.loadMonth(month)
          .then(data => {
            resolve(data.month.days.filter(dayInArray => {
              dayInArray.id === day;
            }));
          })
        })
      }
    } else {
      return Promise.reject("Requested day '" + day + "' is not OK");
    }

  }
}
