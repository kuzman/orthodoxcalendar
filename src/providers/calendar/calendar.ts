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

  public loadMonth(month) {
    if (month > 0 && month <13 && this.month && this.month.month !== month) {
      this.http.get(this.path + month + '.json')
      .map(response => response.json()).subscribe(data => {
        this.setMonthCache(month);
      });
    }
  }

  public loadDay(day) {
    if (this.month) {
      return this.month.days.filter(dayInArray => {
        dayInArray.id === day;
      });
    }
  }
}
