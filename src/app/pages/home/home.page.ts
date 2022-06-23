import { Capacitor } from '@capacitor/core';
import { FcmService } from './../../services/fcm.service';
import { UtilsService } from './../../services/utils.service';
import { AuthService } from './../../services/auth.service';
import { AvatarService } from './../../services/avatar.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
  PushNotificationToken,
  PushNotification,
  PushNotificationActionPerformed,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public profile: any = null;
  constructor(
    public avatarSvc: AvatarService,
    public authSvc: AuthService,
    public utils: UtilsService,
  ) {
    this.avatarSvc.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  ngOnInit() {
    this.initializeFirebase();
  }


  initializeFirebase(){
    if (Capacitor.isNativePlatform) {
      PushNotifications.requestPermissions().then(
        (perm) => {
          if(perm.receive === "granted"){
            console.log('Permissão é granted');
            PushNotifications.addListener(
              'registration',
              (token: Token) => {
                console.log('Meu token: ' + JSON.stringify(token));
              }
            );

            PushNotifications.addListener('registrationError', (error: any) => {
              console.log('Error: ' + JSON.stringify(error));
            });

            PushNotifications.addListener(
              'pushNotificationReceived',
              async (notification: PushNotificationSchema) => {
                console.log('Push received: ' + JSON.stringify(notification));
              }
            );

            PushNotifications.addListener(
              'pushNotificationActionPerformed',
              async (notification: ActionPerformed) => {
                const data = notification.notification.data;
                console.log('Action performed: ' + JSON.stringify(notification.notification));
                if (data.detailsId) {
                  console.log("detail id")
                  // this.router.navigateByUrl(`/home/${data.detailsId}`);
                }
              }
            );
          } else {
            alert('registro falhou')
          }
        },
        (err) => console.log(err)
      );
    }
  }
  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });
    console.log(image);

    if (image) {
      const loading = await this.utils.loadingCtrl.create();
      await loading.present();

      const result = await this.avatarSvc.uploadImage(image);
      await loading.dismiss();

      console.log(result, 'log result');

      if (!result) {
        this.utils.showAlert(
          'Upload falhou.',
          'Não foi possível fazer o upload da imagem.'
        );
      }
    }
  }

  async logout() {
    await this.authSvc.logout();
    this.utils.router.navigateByUrl('/', { replaceUrl: true });
    console.log('Logout');
  }
}
