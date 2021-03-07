import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { BLE } from '@ionic-native/ble/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx'

import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireMessagingModule,],
  providers: [
    HTTP,
    BLE,
    SplashScreen,
    HttpClient,
    AndroidPermissions,
    { provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
