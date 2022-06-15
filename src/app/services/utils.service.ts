import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public router: Router, public authSvc: AuthService) { }



async showAlert(header?: string, message?: string){
  const alert = await this.alertCtrl.create({
    header,
    message,
    buttons: ['OK'],
  });

  await alert.present();
}
}
