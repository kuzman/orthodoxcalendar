import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class CalendarProvider {
  path = 'assets/months_';

  constructor(private http: Http, translate: TranslateService) {
    this.path = this.path + translate.currentLang + '/';
  }

  public loadMonth(month) {
    return this.http.get(this.path + month + '.json')
    .map(response => response.json());
  }
}
