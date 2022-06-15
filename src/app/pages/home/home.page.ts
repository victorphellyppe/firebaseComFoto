import { UtilsService } from './../../services/utils.service';
import { AuthService } from './../../services/auth.service';
import { AvatarService } from './../../services/avatar.service';
import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
