import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-bldetail',
  templateUrl: './bldetail.page.html',
  styleUrls: ['./bldetail.page.scss'],
})
export class BldetailPage implements OnInit {

  device : any;
  items = [];
  services = [];
  peripheral: any = {};
  statusMessage: string;
  service: any = {};

  service_uuid = "b756d7e1-8f69-4de4-bbfa-a200deef3c0a";
  Characteristic_uuid = "b756d7e2-8f69-4de4-bbfa-a200deef3c0a";
  Universal_RX_uuid = "b756d7e7-8f69-4de4-bbfa-a200deef3c0a";


  obj: any;
  

  constructor(
    private ble: BLE,
    public toastCtrl: ToastController,
    private ngZone: NgZone,
    private route: ActivatedRoute, 
    private router: Router) {
      this.route.queryParams.subscribe(() => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.device = this.router.getCurrentNavigation().extras.state.id;
        }
        console.log("DATA GET: " + this.device);
        //this.connect(this.device);        
      });
    }

  ngOnInit() {}

  loadData(event){
    setTimeout(()=> {
      console.log('Data Loaded');
      event.target.complete();
    },500);
  }

  getservices(){
    this.ble.connect(this.device).subscribe(
      peripheral => {
        this.peripheral=peripheral;
          this.ble.write(this.device, this.service_uuid, this.Universal_RX_uuid, this.stringToBytes("list"));
          this.ble.startNotification(this.device, this.service_uuid, this.Characteristic_uuid).subscribe
            (buffer => {
                this.obj = JSON.parse(this.uintToString(buffer));
                this.ble.stopNotification(this.device, this.service_uuid, this.Characteristic_uuid);
              console.log("this.uintToString(buffer)" + this.obj);
              console.log("service Name List(before for): "+ JSON.stringify(this.obj.service[0]));
              console.log("service Name List(before for): "+ JSON.stringify(this.obj.service[1]));
              console.log("service Name List(before for): "+ (this.obj.service[0].uuid));
              console.log("service Name List(before for): "+ JSON.stringify((this.obj.service[0].uuid)));
              /*for (let value of this.obj.service) { 
                this.services.push({name:(value.name), uuid:(value.uuid), 
                  datatype:(value.datatype), characteristic:(value.TXcharacteristic)});
              }*/
             var isinside=false
            for (let value of this.obj.service) { 
              console.log("primo for value"+value );
              for (let item of this.services){
                console.log("INSIDE DOUBLE FOR");
                if (JSON.stringify(item.uuid)==JSON.stringify(value.uuid)){
                  console.log("Already in array");
                  isinside = true;
                }          
              }
              if (isinside==false){
                this.services.push({name:(value.name), uuid:(value.uuid), 
                  datatype:(value.datatype), characteristic:(value.TXcharacteristic)});
              }
              else 
                isinside = false;
            }
            for (let value of this.services){
              console.log(value.name);
              console.log("final array "+ JSON.stringify(value.name));
            }
          })
        },
      peripheral => this.onDeviceDisconnected(peripheral)
    );
    this.ble.disconnect(this.device.id);
  }

  ////////////////////////////////////////////////////////////// connecting
  
  
  connect(device: any){
    console.log("connect function to " + this.device);
    this.ble.connect(this.device).subscribe(
      peripheral => {
        this.peripheral=peripheral;
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
            this.ble.startNotification(this.device, device.uuid, device.characteristic).subscribe
              (buffer => {
                console.log("inside buffer");
                console.log("this.uintToString(buffer)" + this.uintToString(buffer));
                this.items.push(this.uintToString(buffer));
              })   
        })
      },
      peripheral => this.onDeviceDisconnected(peripheral)
    );
  }

    
  async onDeviceDisconnected(peripheral: any) {
    let toast = await this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => console.log('Disconnected'),
      () => console.log('ERROR disconnecting')
      )
  }

  setStatus(message: string) {
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

}
