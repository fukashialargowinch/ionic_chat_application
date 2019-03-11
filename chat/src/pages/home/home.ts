import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ChatpagePage } from '../chatpage/chatpage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username: string ='';
  constructor(public navCtrl: NavController,
  private alertCtrl:AlertController) {

  }
alert(title:string,message:string){
  let alertbox=this.alertCtrl.create({
  title: title,
  subTitle: message,
  buttons : ['ok']
});
alertbox.present();
}



loginuser(){
if(/^[a-zA-Z0-9]+$/.test(this.username))
{
  this.navCtrl.push(ChatpagePage,{
    username:this.username
  });
}

else{
  this.alert('error','invalid');
}
}
}
