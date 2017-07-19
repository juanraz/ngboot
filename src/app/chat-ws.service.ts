import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'

@Injectable()
export class ChatWSService {
  private ws:any;
  private counter:any;
  private wsSubs    = new Subject<String>();

  setLoginError$ = this.wsSubs.asObservable();

    constructor() {
           this.ws = new $WebSocket("ws://10.0.0.15:8080/counter");
        this.ws.send("HELLO!!");
        this.ws.getDataStream().subscribe(
            res => {
            var count = JSON.parse(res.data).value;
            //alert(count);
            console.log('Got: ' + count);
            this.counter = count;
            },
            function(e) { console.log('Error: ' + e.message); },
            function() { console.log('Completed'); }
            );  
        
      this.ws.onMessage(function(message) {
        console.log(message);
      });
    }

    sendMessage(message){
        this.ws = new $WebSocket("ws://10.0.0.15:8080/counter");
        this.ws.send(message);
    }

}
