import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
/**FirebaseListOberservable
 * Generated class for the ChatpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatpage',
  templateUrl: 'chatpage.html',
})
export class ChatpagePage {
username: string ='';
message: string ='';
s;
messages: object[]=[];
  constructor(public db:AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    // console.log(this.navParams);
    this.username=this.navParams.get('username');
  this.s =  this.db.list('/chat').valueChanges().subscribe(data =>{
  //  this.s =  this.db.object('/chat').valueChanges().subscribe(data =>{
      // console.log(data);
//       data.map(elem=>{
// this.messages.push(elem);
//     })
this.messages=data;
    });


  }
send(){
  this.db.list('/chat').push({
    username:this.username,
    message:this.message
});
this.message='';
}
  ionViewDidLoad() {

    console.log('ionViewDidLoad ChatpagePage');
  }

}
