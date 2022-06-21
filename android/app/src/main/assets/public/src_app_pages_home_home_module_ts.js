"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Aplicativos_ionic_firebaseComFoto_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/utils.service */ 6517);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ 7556);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/avatar.service */ 5083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/push-notifications */ 1704);










let HomePage = class HomePage {
  constructor(avatarSvc, authSvc, utils) {
    this.avatarSvc = avatarSvc;
    this.authSvc = authSvc;
    this.utils = utils;
    this.profile = null;
    this.avatarSvc.getUserProfile().subscribe(data => {
      this.profile = data;
    });
  }

  ngOnInit() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    console.log('Initializing HomePage'); // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting

    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.register();
      } else {// Show some error
      }
    }); // On success, we should be able to receive notifications

    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('registration', token => {
      alert('Push registration success, token: ' + token.value);
    }); // Some issue with our setup and push will not work

    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('registrationError', error => {
      alert('Error on registration: ' + JSON.stringify(error));
    }); // Show us the notification payload if the app is open on our device

    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('pushNotificationReceived', notification => {
      alert('Push received: ' + JSON.stringify(notification));
    }); // Method called when tapping on a notification

    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      alert('Push action performed: ' + JSON.stringify(notification));
    });
  }

  changeImage() {
    var _this = this;

    return (0,C_Aplicativos_ionic_firebaseComFoto_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Photos
      });
      console.log(image);

      if (image) {
        const loading = yield _this.utils.loadingCtrl.create();
        yield loading.present();
        const result = yield _this.avatarSvc.uploadImage(image);
        yield loading.dismiss();
        console.log(result, 'log result');

        if (!result) {
          _this.utils.showAlert('Upload falhou.', 'Não foi possível fazer o upload da imagem.');
        }
      }
    })();
  }

  logout() {
    var _this2 = this;

    return (0,C_Aplicativos_ionic_firebaseComFoto_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authSvc.logout();

      _this2.utils.router.navigateByUrl('/', {
        replaceUrl: true
      });

      console.log('Logout');
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__.AvatarService
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQXBsaWNhdGl2b3MlMjBpb25pY1xcZmlyZWJhc2VDb21Gb3RvXFxzcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbn1cclxuXHJcblxyXG4ucHJldmlldyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmFsbGJhY2sge1xyXG4gIHdpZHRoOiAxMjhweDtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iLCJpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xufVxuXG4ucHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmFsbGJhY2sge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"logout()\">\r\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Meu perfil\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"preview\">\r\n\r\n    <ion-avatar (click)=\"changeImage()\">\r\n      <img  *ngIf=\"profile?.imageUrl; else placeholderavatar;\" [src]=\"profile.imageUrl\"/>\r\n      <ng-template #placeholderavatar>\r\n        <div class=\"fallback\">\r\n          <p> selecione </p>\r\n        </div>\r\n      </ng-template>\r\n    </ion-avatar>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map