import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrazniciProvider } from '../../providers/praznici/praznici';

@Component({
  selector: 'page-godina',
  templateUrl: 'godina.html'
})
export class GodinaPage {
  year = new Date().getFullYear();
  prazniciList = [];
  constructor(public navCtrl: NavController, private praznici: PrazniciProvider) {
    this.loadPraznici(this.year);
  }

  public loadPraznici(year) {

  }

}
