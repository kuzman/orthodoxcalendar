import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CalendarProvider } from '../../providers/calendar/calendar'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  year = '';
  currentMonth: any;
  constructor(private calendar: CalendarProvider) {
    this.year = new Date().getFullYear().toString();
  }

  loadCurrentMonth() {
    let month = new Date().getMonth() + 1;
    this.currentMonth = this.calendar.loadMonth(month);
  }
}
