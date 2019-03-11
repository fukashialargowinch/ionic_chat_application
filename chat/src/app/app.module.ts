import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChatpagePage } from '../pages/chatpage/chatpage';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
var config = {
  apiKey: "AIzaSyDZLHOauJhYZGfUNujSaZJ2Ikftd5A-qAs",
  authDomain: "database-1b983.firebaseapp.com",
  databaseURL: "https://database-1b983.firebaseio.com",
  projectId: "database-1b983",
  storageBucket: "database-1b983.appspot.com",
  messagingSenderId: "371024879225"
};
@NgModule({ 
  declarations: [
    MyApp,
    ChatpagePage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatpagePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
