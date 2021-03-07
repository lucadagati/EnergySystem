(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bldetail-bldetail-module"],{

/***/ "7hjY":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bldetail/bldetail.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Select your service\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div padding>\n    <ion-button color=\"primary\" (click)=\"getservices()\">Get Services on Board</ion-button>\n  </div>\n  <ion-card>\n    <ion-list>\n      <button ion-item *ngFor=\"let value of services\" (click)=\"connect(value)\">\n      <h2> {{value.name || 'Unnamed'}}</h2>\n      <p>Service uuid: {{value.uuid}}</p>\n      <p>DataType: {{value.datatype}}</p>\n      <p>Tx uuid: {{value.characteristic}}</p>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let item of items\">{{item}}</ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "BXR/":
/*!*********************************************!*\
  !*** ./src/app/bldetail/bldetail.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "NX/A":
/*!*****************************************************!*\
  !*** ./src/app/bldetail/bldetail-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BldetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BldetailPageRoutingModule", function() { return BldetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bldetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bldetail.page */ "r9O1");




const routes = [
    {
        path: '',
        component: _bldetail_page__WEBPACK_IMPORTED_MODULE_3__["BldetailPage"]
    }
];
let BldetailPageRoutingModule = class BldetailPageRoutingModule {
};
BldetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BldetailPageRoutingModule);



/***/ }),

/***/ "r9O1":
/*!*******************************************!*\
  !*** ./src/app/bldetail/bldetail.page.ts ***!
  \*******************************************/
/*! exports provided: BldetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BldetailPage", function() { return BldetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bldetail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bldetail.page.html */ "7hjY");
/* harmony import */ var _bldetail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bldetail.page.scss */ "BXR/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "yXvl");







let BldetailPage = class BldetailPage {
    constructor(ble, toastCtrl, ngZone, route, router) {
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.items = [];
        this.services = [];
        this.peripheral = {};
        this.service = {};
        this.service_uuid = "b756d7e1-8f69-4de4-bbfa-a200deef3c0a";
        this.Characteristic_uuid = "b756d7e2-8f69-4de4-bbfa-a200deef3c0a";
        this.Universal_RX_uuid = "b756d7e7-8f69-4de4-bbfa-a200deef3c0a";
        this.route.queryParams.subscribe(() => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.device = this.router.getCurrentNavigation().extras.state.id;
            }
            console.log("DATA GET: " + this.device);
            //this.connect(this.device);        
        });
    }
    ngOnInit() { }
    loadData(event) {
        setTimeout(() => {
            console.log('Data Loaded');
            event.target.complete();
        }, 500);
    }
    getservices() {
        this.ble.connect(this.device).subscribe(peripheral => {
            this.peripheral = peripheral;
            this.ble.write(this.device, this.service_uuid, this.Universal_RX_uuid, this.stringToBytes("list"));
            this.ble.startNotification(this.device, this.service_uuid, this.Characteristic_uuid).subscribe(buffer => {
                this.obj = JSON.parse(this.uintToString(buffer));
                this.ble.stopNotification(this.device, this.service_uuid, this.Characteristic_uuid);
                console.log("this.uintToString(buffer)" + this.obj);
                console.log("service Name List(before for): " + JSON.stringify(this.obj.service[0]));
                console.log("service Name List(before for): " + JSON.stringify(this.obj.service[1]));
                console.log("service Name List(before for): " + (this.obj.service[0].uuid));
                console.log("service Name List(before for): " + JSON.stringify((this.obj.service[0].uuid)));
                /*for (let value of this.obj.service) {
                  this.services.push({name:(value.name), uuid:(value.uuid),
                    datatype:(value.datatype), characteristic:(value.TXcharacteristic)});
                }*/
                var isinside = false;
                for (let value of this.obj.service) {
                    console.log("primo for value" + value);
                    for (let item of this.services) {
                        console.log("INSIDE DOUBLE FOR");
                        if (JSON.stringify(item.uuid) == JSON.stringify(value.uuid)) {
                            console.log("Already in array");
                            isinside = true;
                        }
                    }
                    if (isinside == false) {
                        this.services.push({ name: (value.name), uuid: (value.uuid),
                            datatype: (value.datatype), characteristic: (value.TXcharacteristic) });
                    }
                    else
                        isinside = false;
                }
                for (let value of this.services) {
                    console.log(value.name);
                    console.log("final array " + JSON.stringify(value.name));
                }
            });
        }, peripheral => this.onDeviceDisconnected(peripheral));
        this.ble.disconnect(this.device.id);
    }
    ////////////////////////////////////////////////////////////// connecting
    connect(device) {
        console.log("connect function to " + this.device);
        this.ble.connect(this.device).subscribe(peripheral => {
            this.peripheral = peripheral;
            this.ngZone.run(() => {
                console.log("before ble activities");
                console.log("this device");
                console.log(this.device);
                console.log("passed device uuid");
                console.log(device.uuid);
                console.log("passed device name");
                console.log(device.name);
                console.log("passed device characteristic");
                console.log(device.characteristic);
                this.ble.write(this.device, device.uuid, this.Universal_RX_uuid, this.stringToBytes(device.name));
                this.ble.startNotification(this.device, device.uuid, device.characteristic).subscribe(buffer => {
                    console.log("inside buffer");
                    console.log("this.uintToString(buffer)" + this.uintToString(buffer));
                    this.items.push(this.uintToString(buffer));
                });
            });
        }, peripheral => this.onDeviceDisconnected(peripheral));
    }
    onDeviceDisconnected(peripheral) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'The peripheral unexpectedly disconnected',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.ble.disconnect(this.peripheral.id).then(() => console.log('Disconnected'), () => console.log('ERROR disconnecting'));
    }
    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }
    ////////////////////////////////////////////////////  decoding array buffer of notification
    uintToString(buffer) {
        var data = new Uint8Array(buffer[0]);
        return String.fromCharCode.apply(null, data);
    }
    stringToBytes(string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    }
};
BldetailPage.ctorParameters = () => [
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_6__["BLE"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
BldetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bldetail',
        template: _raw_loader_bldetail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bldetail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BldetailPage);



/***/ }),

/***/ "yiqT":
/*!*********************************************!*\
  !*** ./src/app/bldetail/bldetail.module.ts ***!
  \*********************************************/
/*! exports provided: BldetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BldetailPageModule", function() { return BldetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bldetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bldetail-routing.module */ "NX/A");
/* harmony import */ var _bldetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bldetail.page */ "r9O1");







let BldetailPageModule = class BldetailPageModule {
};
BldetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bldetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BldetailPageRoutingModule"]
        ],
        declarations: [_bldetail_page__WEBPACK_IMPORTED_MODULE_6__["BldetailPage"]]
    })
], BldetailPageModule);



/***/ })

}]);
//# sourceMappingURL=bldetail-bldetail-module.js.map