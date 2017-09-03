import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  year = '';
  constructor(public navCtrl: NavController) {
    this.year = new Date().getFullYear().toString(); 
  }

}
