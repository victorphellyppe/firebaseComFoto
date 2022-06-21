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
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public profile:any = null;
  constructor(
    public avatarSvc: AvatarService,
    public authSvc: AuthService,
    public utils: UtilsService
  ) {
    this.avatarSvc.getUserProfile().subscribe(data => {
      this.profile = data;
    });
  }

  ngOnInit(){
      console.log('Initializing HomePage');

      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
        }
      });

      // On success, we should be able to receive notifications
      PushNotifications.addListener('registration',
        (token: Token) => {
          alert('Push registration success, token: ' + token.value);
        }
      );

      // Some issue with our setup and push will not work
      PushNotifications.addListener('registrationError',
        (error: any) => {
          alert('Error on registration: ' + JSON.stringify(error));
        }
      );

      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          alert('Push received: ' + JSON.stringify(notification));
        }
      );

      // Method called when tapping on a notification
      PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          alert('Push action performed: ' + JSON.stringify(notification));
        }
      );
  }
  async changeImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
    console.log(image);

    if(image) {
      const loading = await this.utils.loadingCtrl.create();
      await loading.present();

      const result = await this.avatarSvc.uploadImage(image);
      await loading.dismiss();

      console.log(result, 'log result');

      if(!result){
        this.utils.showAlert('Upload falhou.', 'Não foi possível fazer o upload da imagem.');
      }
    }
  }

  async logout(){
    await this.authSvc.logout();
    this.utils.router.navigateByUrl('/', { replaceUrl: true });
    console.log('Logout');
  }



}
