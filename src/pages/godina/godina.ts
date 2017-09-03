import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-godina',
  templateUrl: 'godina.html'
})
export class GodinaPage {
  year = '';
  constructor(public navCtrl: NavController) {
    this.year = new Date().getFullYear().toString();
  }

}
