import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import autobahn from 'autobahn';
import { AlertController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-lightningrod',
  templateUrl: './lightningrod.page.html',
  styleUrls: ['./lightningrod.page.scss'],
})
export class LightningrodPage implements OnInit {

  lr:any={};
  constructor(
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public http : HttpClient,
  ) {}

  ngOnInit() {
  }

  async autobahn() { 
    if (this.lr.wampagent==null)
      this.lr.wampagent="ws://192.168.1.101:8181/"
    if (this.lr.realm==null)
      this.lr.realm="s4t"
    if (this.lr.uuid==null)
      this.lr.uuid='60290850-8b3e-42c0-9133-314e8bb4cb48'
    if (this.lr.bname==null)
      this.lr.bname="Android"

    try {
      var connection = new autobahn.Connection({url: this.lr.wampagent, realm: this.lr.realm, max_retries: 3});
    } catch (error) {
      console.log(error);
    }

    try {
      console.log("CONNECTION onopen");
      console.log(typeof(this.lr.wampagent));
      console.log(typeof(this.lr.realm));
      console.log(typeof(this.lr.uuid));
      console.log(typeof(this.lr.bname));
      const uuid = this.lr.uuid;

      connection.onopen = function (session) {
        console.log("SESSION ID: "+session.id);
        session.call('controller.stack4things.connection', [uuid, session.id,{
          'lr_version': '0.1',
          'connectivity': {
            'iface': '1', 
            'local_ip': '1',
            'mac': '1'
            }           
        }]).then(
            async res => {
            console.log("Result:", res);
            var jres = JSON.parse(stringify(res));
            const alert = document.createElement('ion-alert');
            alert.header = 'IOTRONIC CONNECTION';
            alert.subHeader = 'Result';
            alert.message = jres.result;
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();

          }
        ).catch(
          error=> {
            console.log(error);
            const alert = document.createElement('ion-alert');
            alert.header = 'IOTRONIC CONNECTION';
            alert.subHeader = 'Result: ERROR';
            alert.message = "WAMP Agent is Down";
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
          }
        ).finally(
          (          res: any) =>{
            console.log(res);
          } 
        )
      };
    }
    catch (error) {
      console.log(error);
    } 
    console.log("CONNECTION open");
    connection.open();
  }

  async isalive(){
    if (this.lr.wampagent==null)
    this.lr.wampagent="ws://192.168.1.101:8181/"
    if (this.lr.realm==null)
      this.lr.realm="s4t"
    if (this.lr.uuid==null)
      this.lr.uuid="60290850-8b3e-42c0-9133-314e8bb4cb48"
    if (this.lr.bname==null)
      this.lr.bname="Android"

    var connection = new autobahn.Connection({url: this.lr.wampagent, realm: this.lr.realm, max_retries: 3});
    var result = "SEARCHING FOR INFO";

    try {
      const uuid = this.lr.uuid;
      const name = this.lr.bname
      console.log("IS ALIVE CALL")
      connection.onopen = async function (session) {
          session.call('controller.stack4things.wamp_alive', [uuid, name]).then(
            async res =>  {
                console.log("Result:", res);
                const alert = document.createElement('ion-alert');
                alert.header = 'IOTRONIC CONNECTION';
                alert.subHeader = 'Result';
                alert.message = stringify(res);
                alert.buttons = ['OK'];
                document.body.appendChild(alert);
                return alert.present();
              }
          ).catch(
            (error)=>{
              const alert = document.createElement('ion-alert');
              alert.header = 'IOTRONIC CONNECTION';
              alert.subHeader = 'Result: ERROR';
              alert.message = "WAMP Agent is Down";
              alert.buttons = ['OK'];
              document.body.appendChild(alert);
              return alert.present();
            }
            );
      }
    }
    catch (error) {
      console.log(error);
      const alert = document.createElement('ion-alert');
            alert.header = 'IOTRONIC CONNECTION';
            alert.subHeader = 'Result: ';
            alert.message = "ERROR";
            alert.buttons = ['OK'];
            document.body.appendChild(alert);
            return alert.present();
      }
    connection.open();
  }

  async getboards(){

    if (this.lr.Auuid==null)
        this.lr.Auuid="141bf3a2-d3b3-44b1-a417-8addfc248d40"
    if (this.lr.usrdmnname==null)
      this.lr.usrdmnname="Default"
    if (this.lr.usrname==null)
      this.lr.usrname="admin"
    if (this.lr.password==null)
      this.lr.password="ADMIN_PASS"
    if (this.lr.pjtname==null)
      this.lr.pjtname="Default"
    if (this.lr.pjname==null)
      this.lr.pjname="admin"      

      const url = "http://192.168.1.101:5000/v3/auth/tokens?nocatalog";
      const url2 = "http://192.168.1.101:8812/v1/boards/";
      const params = { "auth": { 
                            "identity": { 
                                  "methods": ["password"],
                                  "password": {
                                          "user": {
                                               "domain": {
                                                       "name": this.lr.usrdmnname
                                                          },
                                                "name": this.lr.usrname, 
                                                "password": this.lr.password
                                                  } 
                                              } 
                                        }, 
                            "scope": { 
                                "project": {
                                      "domain": { 
                                          "name": this.lr.pjtname 
                                                }, 
                                      "name":  this.lr.pjname 
                                           } 
                                    } 
                            }
                       };

  const options = {
        observe: "response" as 'body', // to display the full response & as 'body' for type cast
        responseType: "json"
      };
      this.http.post(url, params,  {headers: {"Content-Type": "application/json"}, observe: "response"})
      .subscribe(response => {
        console.log("print headers")
          console.log(response.headers.get("X-Subject-Token"));
          this.http.get((url2), {headers: {"X-Auth-Token": response.headers.get("X-Subject-Token")}}).subscribe(
            body => {
              console.log(JSON.parse(JSON.stringify(body)));
            }
          );

          this.http.get((url2+this.lr.Auuid), {headers: {"X-Auth-Token": response.headers.get("X-Subject-Token")}}).subscribe
          (body => {
              console.log(body);
              console.log((body["status"]));
              const alert = document.createElement('ion-alert');
              alert.header = 'ARANCINO BOARD';
              alert.subHeader = 'Status:';
              alert.message = body["status"];
              alert.buttons = ['OK'];
              document.body.appendChild(alert);
              return alert.present();
            });
            
          return response;
      }, err => {
          const alert = document.createElement('ion-alert');
              alert.header = 'ARANCINO BOARD';
              alert.subHeader = 'Status:';
              alert.message = "WRONG ACCESS VALUES";
              alert.buttons = ['OK'];
              document.body.appendChild(alert);
              return alert.present();
          throw err;
      });
  }
}
