import { FcmService } from './fcm.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public router: Router,
    public authSvc: AuthService,
    public fcmSvc: FcmService
  ) {}

  public navigate(nav) {
    this.router.navigate([nav]);
  }

  public changeRoute(rota: string, params?: any) {
    const navExtras: NavigationExtras = {
      state: {
        params,
      },
    };
    this.router.navigateByUrl(rota, navExtras);
  }

  async showAlert(header?: string, message?: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
