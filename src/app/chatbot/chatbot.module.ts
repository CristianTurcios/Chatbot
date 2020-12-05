import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ChatbotComponent]
})
export class ChatbotModule { }
