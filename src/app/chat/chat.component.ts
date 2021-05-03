import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChatComponent implements OnInit {

  chats: string[];
  constructor() {
    this.chats = [];
  }

  ngOnInit(): void {
  }

  addChatMessage(message: string): void {
    this.chats.push(message);
  }
}
