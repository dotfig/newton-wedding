import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { Routes, RouterModule } from '@angular/router';
import { WeddingMainComponent } from './wedding-main/wedding-main.component';
import { WeddingStoryComponent } from './wedding-story/wedding-story.component';
import { WeddingTravelComponent } from './wedding-travel/wedding-travel.component';
import { WeddingSchedComponent } from './wedding-sched/wedding-sched.component';
import { WeddingPicsComponent } from './wedding-pics/wedding-pics.component';
import { WeddingFaqComponent } from './wedding-faq/wedding-faq.component';
import { WeddingStuffComponent } from './wedding-stuff/wedding-stuff.component';
import { WeddingRegComponent } from './wedding-reg/wedding-reg.component';

const routes: Routes = [
  {
    path: '', component: WeddingMainComponent,
    data: {
      title: "Newton Wedding"
    }
  },
  {
    path: 'party', component: WeddingPartyComponent,
    data: {
      title: "Wedding Party"
    }
  },
  {
    path: 'story', component: WeddingStoryComponent,
    data: {
      title: "Our Story"
    }
  },
  {
    path: 'travel', component: WeddingTravelComponent,
    data: {
      title: "Travel"
    }
  },
  {
    path: 'sched', component: WeddingSchedComponent,
    data: {
      title: "Schedule"
    }
  },
  {
    path: 'reg', component: WeddingRegComponent,
    data: {
      title: "Registry"
    }
  },
  {
    path: 'pics', component: WeddingPicsComponent,
    data: {
      title: "Photos"
    }
  },
  {
    path: 'faq', component: WeddingFaqComponent,
    data: {
      title: "Frequently Asked Questions"
    }
  },
  {
    path: 'stuff', component: WeddingStuffComponent,
    data: {
      title: "Things To Do"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
