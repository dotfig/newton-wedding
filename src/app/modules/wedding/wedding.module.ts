import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingMainComponent } from './wedding-main/wedding-main.component';



@NgModule({
  declarations: [WeddingPartyComponent, WeddingMainComponent],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
