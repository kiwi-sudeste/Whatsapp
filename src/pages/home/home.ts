import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  autor: string="";
  constructor(public navCtrl: NavController) {
    
  }

  irproXet(){
    
    this.navCtrl.push(ChatPage, {
      autorpage: this.autor
    })
  }

}
