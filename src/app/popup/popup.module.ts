import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [PopupComponent]
})
export class PopupModule { }
