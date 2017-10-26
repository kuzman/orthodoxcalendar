import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { CalendarProvider } from '../../providers/calendar/calendar';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  language = this.translate.currentLang;
  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, private calendar: CalendarProvider) {
  }

  onChange(lang) {
    this.calendar.clearMonthCache();
    this.calendar.setPath(lang);
    this.translate.use(lang);
    this.calendar.loadMonth(new Date().getMonth() + 1);
  }

}
