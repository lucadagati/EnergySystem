(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bluetooth-bluetooth-module"],{

/***/ "1xrp":
/*!*********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.page.ts ***!
  \*********************************************/
/*! exports provided: BluetoothPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPage", function() { return BluetoothPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bluetooth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bluetooth.page.html */ "mv4S");
/* harmony import */ var _bluetooth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bluetooth.page.scss */ "NTcv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "yXvl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/compiler/src/util */ "Yoyx");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__);









let BluetoothPage = class BluetoothPage {
    constructor(toastCtrl, navCtrl, ble, ngZone, router) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.router = router;
        this.devices = [];
    }
    ngOnInit() { }
    //////////////////////////////////////////////////////////// scannig
    Scan() {
        var status = this.ble.isEnabled().then(function () {
            console.log("Bluetooth is enabled");
            return true;
        }, function () {
            console.log("Bluetooth is *not* enabled");
            const alert = document.createElement('ion-alert');
            alert.header = 'BLUETOOTH STATUS';
            alert.subHeader = 'OFF';
            alert.message = "Please, turn-on Bluetooth to use this app";
            alert.buttons = ['OK'];
            document.body.appendChild(alert);
            return alert.present();
        });
        if (status) {
            console.log("BLE " + status);
            this.startscan();
        }
    }
    startscan() {
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = []; //clear list
        this.ble.scan([], 5).subscribe(device => this.onDeviceDiscovered(device), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var toast = this.toastCtrl.create({
                message: Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__["stringify"])(error),
                duration: 3000,
                position: 'middle'
            });
            (yield toast).present();
        }));
        setTimeout(this.setStatus.bind(this), 5000, "Scan Completed");
        setTimeout(() => {
            this.nodevicefound();
        }, 5000);
    }
    nodevicefound() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.devices.length < 1) {
                var toast = this.toastCtrl.create({
                    message: 'No devices found in peripherals',
                    duration: 3000,
                    position: 'middle'
                });
                (yield toast).present();
            }
        });
    }
    onDeviceDiscovered(device) {
        console.log('Discovered' + JSON.stringify(device, null, 2));
        this.ngZone.run(() => {
            this.devices.push(device);
        });
    }
    deviceSelected(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(JSON.stringify(device) + 'selected');
            console.log(device.id + 'called to connect');
            let navigationExtras = {
                state: {
                    id: device.id,
                }
            };
            this.router.navigate(['bldetail'], navigationExtras);
            // this.connect(device.id);
        });
    }
    setStatus(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(message);
            this.ngZone.run(() => {
                this.statusMessage = message;
            });
        });
    }
};
BluetoothPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
BluetoothPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bluetooth',
        template: _raw_loader_bluetooth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bluetooth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BluetoothPage);



/***/ }),

/***/ "MDt7":
/*!*******************************************************!*\
  !*** ./src/app/bluetooth/bluetooth-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BluetoothPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageRoutingModule", function() { return BluetoothPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bluetooth.page */ "1xrp");




const routes = [
    {
        path: '',
        component: _bluetooth_page__WEBPACK_IMPORTED_MODULE_3__["BluetoothPage"]
    }
];
let BluetoothPageRoutingModule = class BluetoothPageRoutingModule {
};
BluetoothPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BluetoothPageRoutingModule);



/***/ }),

/***/ "NTcv":
/*!***********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibHVldG9vdGgucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "YdS2":
/*!***********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.module.ts ***!
  \***********************************************/
/*! exports provided: BluetoothPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageModule", function() { return BluetoothPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bluetooth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bluetooth-routing.module */ "MDt7");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bluetooth.page */ "1xrp");







let BluetoothPageModule = class BluetoothPageModule {
};
BluetoothPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bluetooth_routing_module__WEBPACK_IMPORTED_MODULE_5__["BluetoothPageRoutingModule"]
        ],
        declarations: [_bluetooth_page__WEBPACK_IMPORTED_MODULE_6__["BluetoothPage"]]
    })
], BluetoothPageModule);



/***/ }),

/***/ "mv4S":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bluetooth/bluetooth.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      BLE devices\n    </ion-title>\n    <ion-button (click)=\"Scan()\" slot=\"end\">\n      <ion-icon name=\"Bluetooth\"></ion-icon>\n      <p>Scan</p>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor=\"let device of devices\" (click)=\"deviceSelected(device)\">\n      <h2>{{device.name || 'Unnamed'}}</h2>\n      <p>{{device.id}}</p>\n      <p> RSSI: {{device.rssi}}</p>\n      </button>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=bluetooth-bluetooth-module.js.map