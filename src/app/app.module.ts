import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { PopupModule } from './popup/popup.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopupModule,
    ChatbotModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  entryComponents: [
    AppComponent
  ],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(AppComponent, { injector });
    customElements.define('sumadi-root', customElement);
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {}
 }
