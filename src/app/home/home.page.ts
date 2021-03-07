import { Component,NgZone } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MessagingService} from '../services/messaging.service';
import { Capacitor, Device, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

const { Geolocation, Toast } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: any;
  lng: any;
  watchId: any;

  constructor(
    private locationService: LocationService,
    private messagingService: MessagingService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private NgZone: NgZone, 
    private router: Router
  ) {
    this.listenForMessages();
  }
/////////////// REQUEST TOKEN TO NOTIFICATIONS
  listenForMessages(){
    this.messagingService.getMessages().subscribe(async (msg:any) => {
      console.log("NEW MESSAGE :", msg);
      console.log("FILETYPE NOTIFICATION ",typeof(msg));
      const alert = await this.alertCtrl.create({
        header: msg.notification.title,
        subHeader: msg.notification.body,
        message: msg.data.info,
        buttons: ['OK'],
      });
      await alert.present();  
    });
  }

  requestPermission() {
    this.messagingService.requestPemission().subscribe(
      async token => {
        const toast = await this.toastCtrl.create({
          message: "Got the token",
          duration: 2000
        });
        toast.present();
      },
      async (err) => {
        const alert = await this.alertCtrl.create({
          header: "Error",
          message: err,
          buttons: ["OK"],
        });
      }
    )
  }

///////// GPS SERVICES

  async getMyLocation() {
    const hasPermission = await this.locationService.checkGPSPermission();
    if (hasPermission) {
      if (Capacitor.isNative) {
        const canUseGPS = await this.locationService.askToTurnOnGPS();
        this.postGPSPermission(canUseGPS);
      }
      else { this.postGPSPermission(true); }
      }
    else {
      const permission = await this.locationService.requestGPSPermission();
      if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
        if (Capacitor.isNative) {
          const canUseGPS = await this.locationService.askToTurnOnGPS();
          this.postGPSPermission(canUseGPS);
        }
        else { this.postGPSPermission(true); }
        }
      else {
        await Toast.show({
        text: 'User denied location permission'
        })
      }
    }
  }
    
  async postGPSPermission(canUseGPS: boolean) {
    if (canUseGPS) { this.watchPosition(); }
      else {
        await Toast.show({
        text: 'Please turn on GPS to get location'
      })
    }
  }
  
  async watchPosition() {
    try {
      this.watchId = Geolocation.watchPosition({}, (position, err) => {
        this.NgZone.run(() => {
        if (err) { console.log('err', err); return; }
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude
          this.clearWatch();
          console.log('Latitude: ' + this.lat)
          console.log('Longitude: ' + this.lng)
          const alert = document.createElement('ion-alert');
            alert.header = 'GeoLocation Info';
            alert.subHeader = 'Coordinate:';
            alert.message = "Latitude:" + this.lat + " Longitude:" + this.lng;
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
        })
      })
    }
    catch (err) { console.log('err', err) }
  }

  clearWatch() {
    if (this.watchId != null) {
      Geolocation.clearWatch({ id: this.watchId });
    }
  }



  blepage(){
    
    this.getMyLocation();

    this.router.navigate(['/bluetooth']);
  }

  loginiotronic(){
    this.router.navigate(['/lightningrod']);
  }
}
