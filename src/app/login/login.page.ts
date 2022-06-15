import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService
  ) { }

  // Fácil acesso para campos de formulário

  get Email() {
    return this.credentialsForm.get('email');
  }

  get Password() {
    return this.credentialsForm.get('password');
  }
  ngOnInit() {
    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get ErrorControl(){
    return this.credentialsForm.controls;
  }
  async register(){
    const loading = await this.utils.loadingCtrl.create();
    await loading.present();
    const user = await this.utils.authSvc.register(this.credentialsForm.value);
    await loading.dismiss();

    if (user) {
      this.utils.changeRoute('/home');
      console.log('Cadastro realizado com sucesso!');

    } else {
      this.utils.showAlert('Cadastro falhou', 'Por favor tente novamente!');
    }
  }

  async login() {
    const loading = await this.utils.loadingCtrl.create();
    await loading.present();
    const user = await this.utils.authSvc.login(this.credentialsForm.value);
    await loading.dismiss();

    if (user) {
      this.utils.changeRoute('/home');
    } else {
      this.utils.showAlert('Login falhou', 'Por favor tente novamente!');
    }
  }

}
