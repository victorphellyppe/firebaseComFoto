import { initializeApp } from '@angular/fire/app';
import { FcmService } from './services/fcm.service';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcmService: FcmService
  ) {}

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //colocando configuração do push
      this.fcmService.initPush("mobile");
    })
  }
}
