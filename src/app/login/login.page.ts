import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService
  ) { }

  // Fácil acesso para campos de formulário

  getEmail() {
    return this.credentials.get('email');
  }

  getPassword() {
    return this.credentials.get('password');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  async register(){
    const loading = await this.utils.loadingCtrl.create();
    await loading.present();
    const user = await this.utils.authSvc.register(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.utils.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.utils.showAlert('Cadastro falhou', 'Por favor tente novamente!');
    }
  }

  async login() {
    const loading = await this.utils.loadingCtrl.create();
    await loading.present();
    const user = await this.utils.authSvc.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.utils.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.utils.showAlert('Login falhou', 'Por favor tente novamente!');
    }
  }

}
