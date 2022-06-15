import { UtilsService } from './../../services/utils.service';
import { AuthService } from './../../services/auth.service';
import { AvatarService } from './../../services/avatar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = null;
  constructor(
    private avatarSvc: AvatarService,
    private authSvc: AuthService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
  }

  async logout(){
    await this.authSvc.logout();
    this.utils.router.navigateByUrl('/', { replaceUrl: true });
    console.log('Logout');
  }

}
