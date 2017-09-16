import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { PrazniciProvider } from '../../providers/praznici/praznici';

@Component({
  selector: 'page-godina',
  templateUrl: 'godina.html'
})
export class GodinaPage {
  year = new Date().getFullYear();
  skipHolyDays = ['velikiChetvrtok','velikiPetok','velikaSabota','veligden_2','veligden_3', 'duovden2', 'duovden3'];
  prazniciList = [];
  constructor(public navCtrl: NavController, private praznici: PrazniciProvider, private translate: TranslateService) {
    this.loadPraznici(this.year);
  }

  public loadPraznici(year) {
    let yearMovingHolyday = this.praznici.getYearMovingHolydays(this.year);
    let i = 0;
    for (let key in yearMovingHolyday) {
      if (yearMovingHolyday.hasOwnProperty(key) && this.skipHolyDays.indexOf(key) === -1) {
        this.prazniciList.splice(i, 0, {
          title: this.translate.instant(key),
          date: yearMovingHolyday[key],
          img: 'assets/img/' + key + '.jpg'
        });
        i++;
      }
    }
  }

}
