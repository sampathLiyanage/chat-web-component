import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ChatComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ChatComponent, { injector });
    customElements.define('arithmix-chat', el);
  }
}
