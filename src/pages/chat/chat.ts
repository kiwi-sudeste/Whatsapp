import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Whatsapp} from '../../app/msg.service'
import { NgZone} from '@angular/core'
import {Events} from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  mensagem: string="";
  msg;
  autorpage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private msgService: Whatsapp,
    public events: Events, private zone:NgZone) {
      this.events.subscribe('updateScreen', () => {
        this.zone.run(() => {
          console.log('force update the screen');
        });
      });
    this.msg = this.msgService.msg;
    this.autorpage=navParams.get('autorpage')
  }

  onAdd() {
    this.msg = {
      Autor: this.autorpage,
      texto: this.mensagem
    };
    this.msgService.addMsg(this.msg)
    //this.navCtrl.setRoot(this.navCtrl.getActive().component)
    this.navCtrl.setRoot(ChatPage, {
      autorpage: this.autorpage
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
}
