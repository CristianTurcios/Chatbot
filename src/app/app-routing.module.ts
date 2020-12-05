import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot/chatbot.component';
import { PopupComponent } from './popup/popup/popup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chatbot',
    pathMatch: 'full',
  },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'popup', component: PopupComponent },
  // { path: 'chatbot', loadChildren: () => import('./chatbot/chatbot.module').then(m => m.ChatbotModule) },
  // { path: 'popup', loadChildren: () => import('./popup/popup.module').then(m => m.PopupModule) },
  // { path: 'chatbot', outlet: 'elementA', loadChildren: () => import('./chatbot/chatbot.module').then(m => m.ChatbotModule) },
  // { path: 'popup', outlet: 'elementA', loadChildren: () => import('./popup/popup.module').then(m => m.PopupModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
