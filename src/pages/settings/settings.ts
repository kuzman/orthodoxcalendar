import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { CalendarProvider } from '../../providers/calendar/calendar';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  language = this.translate.currentLang;
  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, private calendar: CalendarProvider) {
  }

  ionViewDidLoad() {
  }

  onChange(lang) {
    this.calendar.clearMonthCache();
    this.calendar.setPath(lang);
    this.translate.use(lang);
  }

}
