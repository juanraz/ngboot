import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import 'stompjs';

declare let Stomp:any;

const CHAT_URL = 'ws://10.0.0.15:8080/chat-ws/';

export interface Message {
	author: string,
	message: string
}

@Injectable()
export class ChatWSService {
  url = 'http://10.0.0.15:8080/chat-ws/';
    stompUrl = 'ws://10.0.0.15:8080/chat-ws/';
    stompClient;

    constructor() {}

    connectStomp(callback: (response) => void) {
	let self = this;
		
	let webSocket = new WebSocket(this.stompUrl);
	this.stompClient = Stomp.over(webSocket);
		
	this.stompClient.connect({}, function (frame) {
            self.stompClient.subscribe('/topic/messages', function (response) {
                callback(response);
            });
        });
    }

    sendStompMessage(content: string) {
        this.stompClient.send("/app/message", {}, "message");
    }
}
