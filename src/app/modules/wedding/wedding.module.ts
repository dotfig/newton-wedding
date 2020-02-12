import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { WeddingMainComponent } from './wedding-main/wedding-main.component';
import { WeddingStoryComponent } from './wedding-story/wedding-story.component';
import { WeddingTravelComponent } from './wedding-travel/wedding-travel.component';
import { WeddingSchedComponent } from './wedding-sched/wedding-sched.component';
import { WeddingRegComponent } from './wedding-reg/wedding-reg.component';
import { WeddingPicsComponent } from './wedding-pics/wedding-pics.component';
import { WeddingFaqComponent } from './wedding-faq/wedding-faq.component';
import { WeddingStuffComponent } from './wedding-stuff/wedding-stuff.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [WeddingPartyComponent, WeddingMainComponent, WeddingStoryComponent,
    WeddingTravelComponent, WeddingSchedComponent, WeddingRegComponent,
    WeddingPicsComponent, WeddingFaqComponent, WeddingStuffComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class WeddingModule { }
