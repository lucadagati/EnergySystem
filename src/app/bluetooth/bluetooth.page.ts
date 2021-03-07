import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { NgZone } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    private ble: BLE,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit() {}

  devices:any[] = [];
  statusMessage: string;
  storage: any;

  //////////////////////////////////////////////////////////// scannig
  Scan(){
    var status = this.ble.isEnabled().then(
      function() {
          console.log("Bluetooth is enabled");
          return true;
      },
      function() {
          console.log("Bluetooth is *not* enabled");
          const alert = document.createElement('ion-alert');
            alert.header = 'BLUETOOTH STATUS';
            alert.subHeader = 'OFF';
            alert.message = "Please, turn-on Bluetooth to use this app";
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
      }
   );
      if (status){
        console.log("BLE " + status);
        this.startscan();
      }
  }

  startscan(){
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = []; //clear list

    this.ble.scan([],5).subscribe(
      device =>
        this.onDeviceDiscovered(device),
      async error =>  {
        var toast = this.toastCtrl.create({
        message: stringify(error),
        duration: 3000,
        position: 'middle'
        });
        (await toast).present(); 
      }
    );
    setTimeout(this.setStatus.bind(this), 5000, "Scan Completed");
    setTimeout(() => {
      this.nodevicefound();
    }, 5000);  
  }


  async nodevicefound(){
    if (this.devices.length<1) {
        var toast = this.toastCtrl.create({
        message: 'No devices found in peripherals',
        duration: 3000,
        position: 'middle'
    });
    (await toast).present();
    }
  }


  onDeviceDiscovered(device: any){
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(()=>{
      this.devices.push(device)
    })
  }

  async deviceSelected(device: any){
    console.log(JSON.stringify(device) + 'selected');
    console.log(device.id + 'called to connect');
    let navigationExtras: NavigationExtras = {
      state: {
        id: device.id,
      }
      
    };
    this.router.navigate(['bldetail'], navigationExtras);
   // this.connect(device.id);
  }

  async setStatus(message: string) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

}