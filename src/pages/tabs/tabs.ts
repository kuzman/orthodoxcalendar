import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MesecPage } from '../mesec/mesec';
import { GodinaPage } from '../godina/godina';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  meseci = ['jan', 'fev', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
  mesec = this.meseci[(new Date().getMonth())];
  today = 'today';
  tab1Root = HomePage;
  tab2Root = MesecPage;
  tab3Root = GodinaPage;
  tab4Root = SettingsPage;
  year = '';
  currentMonth: any;
  constructor(private translate: TranslateService) {
    this.year = new Date().getFullYear().toString();
  }

}
