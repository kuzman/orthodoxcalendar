import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CalendarProvider } from '../../providers/calendar/calendar'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  meseci = ['jan', 'fev', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
  mesec = this.meseci[(new Date().getMonth())];
  today = 'today';
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  year = '';
  currentMonth: any;
  constructor(private calendar: CalendarProvider, private translate: TranslateService) {
    this.year = new Date().getFullYear().toString();
  }

  loadCurrentMonth() {
    let month = new Date().getMonth() + 1;
    // this.currentMonth = this.calendar.loadMonth(month);
  }
}
